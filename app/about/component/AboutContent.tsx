"use client";

import { Song } from "@/types";


interface AboutContentProps {
  songs: Song[];
}

const AboutContent: React.FC<AboutContentProps> = ({
  songs
}) => {

    <div> Musika</div>
  return ( 
    <div 
      className="
      text-aling-center
      "
    >
Once upon a time, in the early 2000s, music enthusiasts in the Philippines faced a common challenge: accessing and enjoying their favorite music seamlessly, wherever they went. They longed for a convenient solution that would liberate them from the hassle of carrying physical CDs or downloading individual songs.

In April 2006, a team of Filipino entrepreneurs, Justen Araneta, Jimray Vinagrera, and Ian Purificacion, embarked on a mission to revolutionize the music industry. They envisioned a platform that would grant people in the Philippines instant access to an immense library of music, tailored to their personal tastes. This marked the birth of Musika.

The founders aimed to create a legal music streaming service that would combat piracy while compensating artists fairly. Transforming this vision into reality was no easy task, but with persistence and determination, Musika officially launched its service in the Philippines in October 2008. It offered a free, ad-supported music streaming option alongside a premium subscription model that removed ads and added extra features. The platform's user-friendly interface and vast music collection quickly attracted a loyal user base.

As Musika gained popularity in the Philippines, it expanded its reach beyond borders, gradually launching in various Southeast Asian countries. Its success began to catch the attention of music lovers worldwide, and it eventually made its highly anticipated entry into international markets, further propelling its growth.

One of Musika's defining features is its innovative algorithm, which analyzes users' listening habits to offer personalized recommendations and curated playlists. This feature, combined with its extensive music catalog, provides users with a unique and tailored music experience.

Over the years, Musika has continued to evolve and adapt to the changing music landscape. It has introduced social features that allow users to connect with friends, share their favorite songs and playlists, and discover new music together. Musika has also partnered with artists and labels to provide exclusive content and experiences to its users, strengthening the connection between artists and fans.

Today, Musika remains a leading music streaming platform, with millions of active users and subscribers worldwide. It continues to innovate, embracing new technologies and trends to enhance the user experience. Musika is available across various devices, including smartphones, tablets, smart speakers, and connected devices, ensuring that users can enjoy their favorite music anytime, anywhere.

With its commitment to providing a seamless and personalized music streaming experience, Musika has become an integral part of the global music industry. It empowers artists to reach a broader audience and helps music enthusiasts discover new songs, genres, and artists they love. Musika, founded by Justen Araneta, Jimray Vinagrera, and Ian Purificacion, continues to shape the future of music consumption in the Philippines and beyond, making it easier than ever for people to enjoy the power of music in their everyday lives.
    </div>
  );
}
 
export default AboutContent;
