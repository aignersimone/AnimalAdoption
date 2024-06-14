import {PawPrint} from "lucide-react";
import {Link} from "@remix-run/react";

//Rückgabe der Darstellung der About-Seite
export default function About() {
  return (
      <main className="mx-auto my-28 max-w-4xl text-justify">
          <div className="mt-3 flex flex-row gap-5">
              <PawPrint className="linkcolor"/><h1>Welcome to Little Paws!</h1>
          </div>
          <p className="mt-4"></p>
          <p className="mt-4">
              Our mission is to provide loving homes for animals in need and to help animal lovers find their perfect furry companions. With us, you can discover a variety of animals looking for a warm, loving home – from playful puppies and kittens to gentle seniors.
          </p>
          <p className="mt-4">
              What makes us special? Our unique feature that allows you to save your favorite animals in a favorites list! This way, you can keep track of your favorites, compare them, and make a well-considered decision with ease. Whether you're looking for a loyal dog, a purring cat, or a more exotic animal companion, we are here to help you find your perfect pet.
          </p>
          <p className="mt-4">
              Our platform not only offers a user-friendly way to search for adoptable animals but also provides extensive information about each animal, its needs, and its personality. We work with shelters and rescue organizations to ensure that every four-legged friend on our site has the best possible chance of finding a loving home.
          </p>
          <p className="mt-4">
              Every animal on our site is excited to meet their new life partner and embark on countless adventures together. Start your journey today towards a life full of animal joy and unconditional love!
          </p>

          <button className="linkbtn my-4"><Link to="/app/library"><b>Our adoption animals</b></Link></button>

          <img src="https://img.freepik.com/premium-vector/tiger-paws-animal-paw-prints-vector-different-animals-footprints-black-white-background_603291-2052.jpg" alt="Paw Print" className="w-full mt-4"/>
      </main>
  );
}
