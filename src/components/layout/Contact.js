"use client";

import {
    Button,
    Container,
    FormControl,
    FormErrorMessage,
    FormLabel,
    Heading,
    Input,
    Text,
    Textarea,
    useToast,
} from "@chakra-ui/react";
import { SectionHeaders } from "./Hero";

import { useState } from "react";
import emailjs from '@emailjs/browser';

export default function Contact() {

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();

        const serviceId = 'service_8v49aq9';
        const templateId = 'template_w1w7x3k';
        const publicKey = 'k2Sn_yKTYbEu77e6e';

        const templateParams = {
            from_name: name,
            from_email: email,
            to: 'Don Sanoj',
            message: message,
        }

        emailjs.send(serviceId, templateId, publicKey, templateParams)
            .then((response) => {
                console.log('Email sent successfully!', response);
                setName('');
                setEmail('');
                setMessage('');
            })
            .catch((error) => {
                console.error('Error sending email', error);
            });
    }

    return (
        <>
            <section id="contact" className=" mt-4 max-w-6xl mx-auto p-4 text-center mb-16 scroll-smooth">

                <SectionHeaders
                    subHeader={'Reach Out for Collaboration and Inquiries'}
                    mainHeader={'Contact Me'} />

                <Container maxW={'580px'} mt={12} mb={14} border={2} borderColor={"white"}>
                    <Heading fontSize={20} paddingBottom={8}>Let's Talk</Heading>

                    <FormControl isRequired mb={5}>
                        <FormLabel>Name</FormLabel>
                        <Input
                            type="text"
                            name="name"
                            errorBorderColor="red.300" />
                        <FormErrorMessage>Required</FormErrorMessage>
                    </FormControl>

                    <FormControl isRequired mb={5}>
                        <FormLabel>Email</FormLabel>
                        <Input
                            type="email"
                            name="email"
                            errorBorderColor="red.300"
                        />
                        <FormErrorMessage>Required</FormErrorMessage>
                    </FormControl>

                    <FormControl isRequired mb={5}>
                        <FormLabel>Subject</FormLabel>
                        <Input
                            type="text"
                            name="subject"
                            errorBorderColor="red.300"
                        />
                        <FormErrorMessage>Required</FormErrorMessage>
                    </FormControl>

                    <FormControl isRequired mb={5}>
                        <FormLabel>Message</FormLabel>
                        <Textarea
                            type="text"
                            name="message"
                            errorBorderColor="red.300"
                            rows={4}
                        />
                        <FormErrorMessage>Required</FormErrorMessage>
                    </FormControl>

                    <Button
                        variant="outline"
                        colorScheme="blue"
                        textColor={"white"}
                        width={320}
                        _hover={{textColor: "white", bg: "#757575"}}
                    >
                        Send Email
                    </Button>

                </Container>

                {/* <form onSubmit={handleSubmit} className=" text-black">
                    <input
                        type="text"
                        placeholder="Name"
                        value={name}
                        onChange={(e) => setName(e.target.value)} />

                    <input
                        type="email"
                        placeholder="Email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)} />

                    <textarea
                        cols="30"
                        rows="10"
                        placeholder="Message"
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}>
                    </textarea>

                    <button type="submit" className=" bg-white">Submit</button>
                </form> */}


                <div className=" mt-10 mb-14">
                    <h1 className=" text-xl mb-2">Contact Number</h1>
                    <a className=" text-3xl hover:border-b-2 border-gray-600" href="tel:+94760536392">+94 760 536 392</a>
                </div>

            </section>
        </>
    );
}