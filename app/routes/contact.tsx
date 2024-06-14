import {PawPrint} from "lucide-react";

export default function Contact() {
  return (
      <main className="mx-auto my-28 max-w-4xl text-justify">
          <div className="mt-3 flex flex-row gap-5">
              <PawPrint /><h1>Contact Us</h1>
          </div>
          <p>
              Thank you for your interest in our pet adoption website! We appreciate your questions, suggestions, and feedback.
          </p><br/>
          <div className="my-2">
              <h2>Contact Information:</h2>
              <p>Softwarepark 1</p>
              <p>4232 Hagenberg</p>
              <p>Austria</p>
          </div><br/>
          <div className="my-2">
              <p><strong>Phone:</strong></p>
              <p>06745 495983 485039</p>
          </div><br/>
          <div className="my-2">
              <p><strong>Email:</strong></p>
              <p>petadoption@hagenberg.at</p>
          </div><br/>
          <div className="my-2">
              <p><strong>Opening Hours:</strong></p>
              <p>Monday to Friday:</p>
              <p>9:00 AM - 6:00 PM</p>
              <p>Closed on Saturdays, Sundays, and holidays</p>
          </div>
      </main>

  );
}
