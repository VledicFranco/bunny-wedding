import styled from 'styled-components'
import { Content } from '../../Content'
import { BaseFont, CursiveFont, colors } from '../../CommonCss'
import { Firestore, collection, doc, getDoc, setDoc } from 'firebase/firestore'
import { useState } from 'react'

const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`

const Form = {
    Body: styled.form`
        display: flex;
        flex-direction: column;
        align-items: center;
        width: 200px;
        ${CursiveFont}
    `,
    Input: styled.input`
        font-size: 14px;
        margin: 0px;
        width: 100%;
        max-width: 300px;
        padding: 10px 20px;
        ${CursiveFont}
        font-size: 16px;
        font-weight: bold;
        background-color: transparent;
        border: 0px;
        border-bottom: 2px dotted ${colors.primary};
        &:focus {
            outline: none;
        }
    `,
    RadioInput: styled.input`
        margin-right: 10px;
    `,
    Label: styled.label`
        font-size: 14px;
        margin: 0px;
        width: 100%;
        max-width: 300px;
        padding: 10px 20px;
        ${CursiveFont}
        font-size: 16px;
        font-weight: bold;
        background-color: transparent;
        border: 0px;
        border-bottom: 2px dotted ${colors.primary};
        &:focus {
            outline: none;
        }
    `,
    Button: styled.button`
        font-size: 14px;
        margin: 20px 0px;
        width: 100%;
        max-width: 300px;
        padding: 10px 20px;
        ${BaseFont}
        font-weight: bold;
        background-color: ${colors.primary};
        border: 1px solid ${colors.primaryLight};
        border-radius: 10px;
        color: white;
        cursor: pointer;
        &:focus {
            outline: none;
        }
    `,
    ErrorMessage: styled.p`
        font-size: 14px;
        margin: 0px;
        width: 100%;
        max-width: 300px;
        padding: 10px 20px;
        ${BaseFont}
        text-align: center;
        font-weight: bold;
        color: red;
    `,
    SuccessMessage: styled.p`
        font-size: 14px;
        margin: 0px;
        width: 100%;
        max-width: 300px;
        padding: 10px 20px;
        ${BaseFont}
        text-align: center;
        font-weight: bold;
        color: green;
    `,
}

const emailRegex: RegExp = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i

const RsvpForm = ({ content, firestore }: { content: Content, firestore: Firestore }) => {
    const [fullname, setFullname] = useState("")
    const [email, setEmail] = useState("")
    const [attending, setAttending] = useState(true)
    const [number, setNumber] = useState<string>("")
    const [error, setError] = useState<string>("")
    const [success, setSuccess] = useState<string>("")
    const [done, setDone] = useState<boolean>(false)

    const write = async () => 
        await setDoc(doc(collection(firestore, "rsvps"), email), { fullname, email, attending, number, })

    const read = async () => 
        await getDoc(doc(firestore, "rsvps", email))

    const submit = async () => {
        // Error Handling
        const errors: string[] = []
        if (fullname.length < 2) 
            errors.push(content.rsvp.form.errorBadName)
        if (!emailRegex.test(email)) 
            errors.push(content.rsvp.form.errorBadEmail)
        const num = parseInt(number)
        if (isNaN(num) || num < 1) 
            errors.push(content.rsvp.form.errorBadNumber)
        try {
            const prevDoc = await read()
            if (prevDoc.exists()) 
                errors.push(content.rsvp.form.errorEmailUsed)
        } catch (e) {
            setError(content.rsvp.form.errorDb)
            console.error(e)
        }
        if (errors.length > 0) 
            setError(`${content.rsvp.form.please} ${errors.join(` ${content.rsvp.form.and} `)}.`)
        else 
            setError("")
        if (errors.length > 0) return

        try {
            await write()
            console.log("Document written with ID: ", email)
            setSuccess(content.rsvp.form.success)
            setDone(true)
        } catch (e) {
            setError(content.rsvp.form.errorDb)
            console.error(e)
        }
        // DB
    }

    return <Container>
        <Form.Body>
        <Form.SuccessMessage>{success}</Form.SuccessMessage>
        <Form.ErrorMessage>{error}</Form.ErrorMessage>
            {/* Full Name */}
            <Form.Input 
                placeholder={content.rsvp.form.fullname} 
                value={fullname} 
                onChange={e => setFullname(e.target.value)} 
                disabled={done} 
            />
            {/* Email */}
            <Form.Input 
                placeholder={content.rsvp.form.email} 
                value={email} 
                onChange={e => setEmail(e.target.value)} 
                disabled={done} 
            />
            {/* YES */}
            <Form.Label>
                <Form.RadioInput 
                    type='radio' 
                    checked={attending} 
                    onChange={e => setAttending(e.target.value === "on")} 
                    disabled={done} 
                />
                {content.rsvp.form.attendingYes}
            </Form.Label>
            {/* NO */}
            <Form.Label>
                <Form.RadioInput 
                    type='radio' 
                    checked={!attending} 
                    onChange={e => setAttending(e.target.value !== "on")} 
                    disabled={done} 
                />
                {content.rsvp.form.attendingNo}
            </Form.Label>
            {/* Number of guests */}
            <Form.Input 
                placeholder={content.rsvp.form.attendingNumber} 
                value={number} 
                onChange={e => setNumber(e.target.value)} 
                disabled={done} 
            />
        </Form.Body>
        <Form.Button onClick={submit} disabled={done}>{content.rsvp.form.submit}</Form.Button> 
    </Container>
}

export default RsvpForm
