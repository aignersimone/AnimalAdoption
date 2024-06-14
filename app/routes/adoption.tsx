import {PawPrint} from "lucide-react";

export default function Adoption() {
    return (
        <main className="mx-auto my-28 max-w-4xl text-justify">
            <div className="mt-3 flex flex-row gap-5">
                <PawPrint className="linkcolor"/><h1>Adoption Process</h1>
            </div>
            <p className="mt-4">Thank you for your interest in adopting one of our animals! We want to ensure that each animal is placed in a loving and caring home. Our adoption process consists of several steps to ensure that the needs of the animal and the conditions of the new home are optimally met.</p>
            <li className="mt-4 ms-6">
                <b>Application:</b> Begin the adoption process by filling out an application. In this application, we want to learn more about you, your living conditions, and your experience with pets.
            </li>
            <li className="mt-4 ms-6">
                <b>Pre-screening:</b> After receiving your application, we conduct a pre-screening. This may include reference checks, residence verification, and possibly a home visit to ensure that your home is safe and pet-friendly.
            </li>
            <li className="mt-4 ms-6">
                <b>Personal Meeting:</b> If the pre-screening is successful, we schedule an appointment for a personal meeting with the animal you wish to adopt. This allows you to get to know the animal and ensure that it fits well with you and your lifestyle.
            </li>
            <li className="mt-4 ms-6">
                <b>Adoption Finalization:</b> After you have decided on an animal and the adoption is approved, the adoption contracts are signed, and an adoption fee is collected. This fee often covers the cost of vaccinations, spaying/neutering, and other medical treatments for the animal.
            </li>
            <li className="mt-4 ms-6">
                <b>Post-adoption Support:</b> Our support does not end with the adoption! We continue to be available to answer questions, provide advice, and ensure that your new pet's integration goes smoothly.
            </li>
            <p className="mt-4 ">
                We believe that adopting a pet is a lifelong commitment and are here to support you throughout the entire process. If you are ready to give your new furry friend a loving home, please fill out our application, and let’s begin the journey to a happy pet adoption together!
            </p>
            <img src="https://people.com/thmb/BJO005QLK6f4YcZHW0iONQxoJ1g=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc():focal(999x0:1001x2)/family-adopt-dog-6c2f1eedd593433f85549e94e07af8bf.jpg" alt="Adopted Animal with family" className="w-full"/>
        </main>
    );
}
