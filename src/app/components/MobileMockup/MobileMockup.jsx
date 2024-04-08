// src/components/MobileMockup.js
import React from "react";
// import './mobile.css';
import Image from "next/image";
import IconBar from "../IconBar/IconBar";
import Link from "next/link";
import HomeInfo from "../HomeInfo/HomeInfo";

const MobileMockup = ({ children }) => {
  return (
    <main className="flex items-start space-x-20 m-auto">
      <section className="mockup-phone ml-40 mb-20 mr-10 shadow-2xl ">
      <main className="camera">{children}</main>
      <div className="display">
        <section className="artboard artboard-demo phone-1 bg-white">
          <div className="upper-section mt-5">
            <section className="info-profile mb-2">
              <div className="profile-img">
                <div className="circular-image">
                  <Image
                    src="/img/foto-perfil.jpeg"
                    alt="Foto Carla Escobar Prímola"
                    width={800}
                    height={800}
                    className="imgHome"
                  />
                </div>
              </div>
              <div className="data-ig">9 Posts</div>
              <div className="data-ig">758 Followers</div>
              <div className="data-ig">155 Following</div>
            </section>

            <div className="mb-2">
              <h5>Carla Escobar Prímola</h5>
              <h6>Web Developer & Digital Marketing</h6>
              <p className="description-ig mb-3">
                Vengo del mundo del marketing y tras estudiar un
                bootcamp en Desarrollo web & ciberseguridad, he
                querido adentrarme en el sector IT. ¡Echa un ojo a mi Portfolio!
              </p>
            </div>
          </div>

          <div className="edit-profile mt-10">Edit profile</div>

          <div className="lower-section bg-gray-200">
            <div className="post-ig bg-white">
              <Link
                className=""
                href="https://github.com/carlaprimola"
                target="_blank"
              >
                GitHub
              </Link>
            </div>
            <div className="post-ig">
              <Link
                className=""
                href="https://www.linkedin.com/in/carlaescobarprimola/"
                target="_blank"
              >
                Linkedin
              </Link>
            </div>
            <div className="post-ig">CV</div>
            <div className="post-ig">Proyecto 4</div>
            <div className="post-ig">Proyecto 5</div>
            <div className="post-ig">Proyecto 6</div>
            <div className="post-ig">Proyecto 7</div>
            <div className="post-ig">Proyecto 8</div>
            <div className="post-ig">Proyecto 9</div>
          </div>
        </section>
      </div>
    </section>

    <HomeInfo/>
    </main>
    
  );
};

export default MobileMockup;
