import Image from "next/image";
import { SectionHeaders } from "./Hero";

export const projects = [
    {
        title: "Matthias Leidinger",
        description: "Originally hailing from Austria, Berlin-based photographer Matthias Leindinger is a young creative brimming with talent and ideas.",
        src: "rock.jpg",
        link: "https://www.ignant.com/2023/03/25/ad2186-matthias-leidingers-photographic-exploration-of-awe-and-wonder/",
        color: "#BBACAF"
    },
    {
        title: "Clément Chapillon",
        description: "This is a story on the border between reality and imaginary, about the contradictory feelings that the insularity of a rocky, arid, and wild territory provokes”—so French photographer Clément Chapillon describes his latest highly captivating project Les rochers fauves (French for ‘The tawny rocks’).",
        src: "tree.jpg",
        link: "https://www.ignant.com/2022/09/30/clement-chapillon-questions-geographical-and-mental-isolation-with-les-rochers-fauves/",
        color: "#977F6D"
    },
    {
        title: "Zissou",
        description: "Though he views photography as a medium for storytelling, Zissou’s images don’t insist on a narrative. Both crisp and ethereal, they’re encoded with an ambiguity—a certain tension—that lets the viewer find their own story within them.",
        src: "water.jpg",
        link: "https://www.ignant.com/2023/10/28/capturing-balis-many-faces-zissou-documents-the-sacred-and-the-mundane-of-a-fragile-island/",
        color: "#C2491D"
    },
]

export default function FAQ() {
    return (
        <>
            <section id="faq" className=" mt-2 max-w-6xl mx-auto p-4 text-center mb-16 scroll-smooth">
                <SectionHeaders
                    subHeader={'Find Answers to Common Queries'}
                    mainHeader={'Frequently asked questions'} />

                {/* {projects.map((project, i) => {
                    return <Card key={`p_${i}`} {...project} i={i} />;
                })} */}
            </section>
        </>
    );
}

// export const Card = ({ title, description, src, link, color, i }) => {
    // return (
    //     <div className="flex items-center justify-center">
    //         <div
    //             className="flex flex-col rounded-[25px] p-[50px] transform origin-top sticky top-[5vh]"
    //             style={{ backgroundColor: color }}
    //         >
    //             <h2>{title}</h2>
    //             <div className="flex mt-[50px] gap-[50px]">
    //                 <div className="relative w-[40%] top-[10%] text-[16px] after:text-[28px]">
    //                     <p>{description}</p>
    //                     <span>
    //                         <a href={link} target="_blank" rel="noopener noreferrer">
    //                             See more
    //                         </a>
    //                         <SVG />
    //                     </span>
    //                 </div>
    //                 <div className="relative w-[60%] h-[500px] overflow-hidden rounded-[25px]">
    //                     <div className="w-full h-full">
    //                         <Image layout={"fill"} objectFit={"contain"} src={`/images/${src}`} alt="image" />
    //                     </div>
    //                 </div>
    //             </div>
    //         </div>
    //     </div>
    // );
// };


// export function SVG() {
//     return (
//         <svg width="22" height="12" viewBox="0 0 22 12" fill="none" xmlns="http://www.w3.org/2000/svg">
//             <path d="M21.5303 6.53033C21.8232 6.23744 21.8232 5.76256 21.5303 5.46967L16.7574 0.696699C16.4645 0.403806 15.9896 0.403806 15.6967 0.696699C15.4038 0.989592 15.4038 1.46447 15.6967 1.75736L19.9393 6L15.6967 10.2426C15.4038 10.5355 15.4038 11.0104 15.6967 11.3033C15.9896 11.5962 16.4645 11.5962 16.7574 11.3033L21.5303 6.53033ZM0 6.75L21 6.75V5.25L0 5.25L0 6.75Z" fill="black" />
//         </svg>
//     );
// }