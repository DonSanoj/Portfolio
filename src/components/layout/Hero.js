import React from 'react'

export function SectionHeaders({ subHeader, mainHeader }) {
    return (
        <>
            <h3 className=" uppercase text-gray-600 font-semibold leading-4 mb-3">
                {subHeader}
            </h3>
            <h2 className=" text-primary font-sm text-3xl mb-5">
                {mainHeader}
            </h2>
        </>
    );
}

export function DownloadButton() {
    // Add logic here to generate or fetch the CV file URL
    const cvFileUrl = '/sanoj.pdf';

    return (
        <a href={cvFileUrl} download="sanoj-cv.pdf">
            Download CV
        </a>
    );
};

export default function Hero() {
    return (
        <>
            <section id="hero" className="hero mt-4 max-w-6xl mx-auto p-4 border-gray-600 mb-16 scroll-smooth">
                Hello 
            </section>

        </>
    )
}
