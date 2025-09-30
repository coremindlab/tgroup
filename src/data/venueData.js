// data/venueData.js
import slide1 from "../assets/home/slide1.jpg";
import slide2 from "../assets/home/slide2.jpg";
import slide3 from "../assets/home/slide3.jpg";
// import slide4 from "../assets/home/slide4.jpg";
import slide4 from "../assets/home/slide4.png";
import thay_1 from "../assets/thay/thay_1.jpg";
import thay_2 from "../assets/thay/thay_2.jpg";
import thay_3 from "../assets/thay/thay_3.jpg";
import thay_4 from "../assets/thay/thay_4.png"
import tderm_1 from "../assets/tderm/tderm_1.jpg";
import tderm_2 from "../assets/tderm/tderm_2.jpg";
import tderm_3 from "../assets/tderm/tderm_3.jpg";
import tderm_4 from "../assets/tderm/tderm_4.jpg";
import got_1 from "../assets/got/got_1.jpg";
import got_2 from "../assets/got/got_2.jpg";
import got_3 from "../assets/got/got_3.jpg";
import got_4 from "../assets/got/got_4.jpg";
import rec_1 from "../assets/rec/rec_1.jpg";
import rec_2 from "../assets/rec/rec_2.jpg";
import rec_3 from "../assets/rec/rec_3.jpg";
import rec_4 from "../assets/rec/rec_4.jpg";



export const venueData = {
  thay: {
    year: "2015",
    title: "THAY",
    accent: "thay",
    heroImage: slide1,
    quotes: [
      "Elevates the Ekkamai Experience-",
      "THAY is more than a venue — it’s a destination where every visit becomes part of your story.",
    ],
    paragraphs: [
      "Building on the foundation set in 2015, THAY elevates the Ekkamai experience with a sophisticated blend of contemporary design and vibrant energy. Every corner of the venue is curated to create memorable moments — from intimate gatherings to lively social nights.",
      "With thoughtfully crafted interiors, ambient lighting, and signature music programming, THAY invites guests to relax, connect, and celebrate. The space embodies a seamless fusion of style and comfort, reflecting the modern lifestyle of the city’s discerning crowd.",
      "Whether it’s a quiet evening with friends or a dynamic night of music and cocktails,",
    ],
    // phrases to accent per paragraph index
    highlights: [
      ["THAY"],                          // paragraph 0
      ["relax, connect, and celebrate."],// paragraph 1
      [],                                // paragraph 2 (none)
    ],
    eventHighlights: [
      {
        id: "thay-uni-night",
        title: "Event : Uni Night  EP.1 - 2",
        gallery: {
          small: [
            "/images/highlights/thay/uninight/thayuni_1.png",
            "/images/highlights/thay/uninight/thayuni_2.jpg",
            "/images/highlights/thay/uninight/thayuni_3.png",
            "/images/highlights/thay/uninight/thayuni_4.png", // optional (4th~6th)
            "/images/highlights/thay/uninight/thayuni_5.png",
            "/images/highlights/thay/uninight/thayuni_6.png",
          ],
          highlight: "/images/highlights/thay/uninight/thayuni_cover.png",
        },
      },
      {
        id: "thay-halloween",
        title: "Event : Halloween Nights",
        gallery: {
          small: [
            "/images/highlights/thay/halloween/thayhalloween_1.jpg",
            "/images/highlights/thay/halloween/thayhalloween_2.jpg",
            "/images/highlights/thay/halloween/thayhalloween_3.jpg",
            "/images/highlights/thay/halloween/thayhalloween_4.jpg", // optional (4th~6th)
            "/images/highlights/thay/halloween/thayhalloween_5.jpg",
            "/images/highlights/thay/halloween/thayhalloween_6.jpg",
          ],
          highlight: "/images/highlights/thay/halloween/thayhalloween_cover.jpg",
        },
      },
      {
        id: "thay-valentine",
        title: "Event : Valentine's",
        gallery: {
          small: [
            "/images/highlights/thay/valentine/thayvalentine_1.png",
            "/images/highlights/thay/valentine/thayvalentine_2.jpg",
            "/images/highlights/thay/valentine/thayvalentine_3.png",
            "/images/highlights/thay/valentine/thayvalentine_4.png", // optional (4th~6th)
            "/images/highlights/thay/valentine/thayvalentine_5.png",
            "/images/highlights/thay/valentine/thayvalentine_6.png",
          ],
          highlight: "/images/highlights/thay/valentine/thayvalentine_cover.png",
        },
      },
      {
        id: "thay-longtalay",
        title: "Event : Thay Long Talay",
        gallery: {
          small: [
            "/images/highlights/thay/thaylongtalay/thaylongtalay_1.png",
            "/images/highlights/thay/thaylongtalay/thaylongtalay_2.jpg",
            "/images/highlights/thay/thaylongtalay/thaylongtalay_3.png",
            "/images/highlights/thay/thaylongtalay/thaylongtalay_4.png", // optional (4th~6th)
            "/images/highlights/thay/thaylongtalay/thaylongtalay_5.png",
            "/images/highlights/thay/thaylongtalay/thaylongtalay_6.png",
          ],
          highlight: "/images/highlights/thay/thaylongtalay/thaylongtalay_cover.png",
        },
      },
      {
        id: "thay-longtalay2",
        title: "Event : Thay Long Talay 2",
        gallery: {
          small: [
            "/images/highlights/thay/thaylongtalay2/thaylongtalay2_1.jpg",
            "/images/highlights/thay/thaylongtalay2/thaylongtalay2_2.jpg",
            "/images/highlights/thay/thaylongtalay2/thaylongtalay2_3.jpg",
            "/images/highlights/thay/thaylongtalay2/thaylongtalay2_4.jpg", // optional (4th~6th)
            "/images/highlights/thay/thaylongtalay2/thaylongtalay2_5.jpg",
            "/images/highlights/thay/thaylongtalay2/thaylongtalay2_6.jpg",
          ],
          highlight: "/images/highlights/thay/thaylongtalay2/thaylongtalay2_cover.jpg",
        },
      },
      {
        id: "thay-longtalay3",
        title: "Event : Thay Long Talay 3",
        gallery: {
          small: [
            "/images/highlights/thay/thaylongtalay3/thaylongtalay3_1.jpg",
            "/images/highlights/thay/thaylongtalay3/thaylongtalay3_2.jpg",
            "/images/highlights/thay/thaylongtalay3/thaylongtalay3_3.jpg",
            "/images/highlights/thay/thaylongtalay3/thaylongtalay3_4.jpg", // optional (4th~6th)
            "/images/highlights/thay/thaylongtalay3/thaylongtalay3_5.jpg",
            "/images/highlights/thay/thaylongtalay3/thaylongtalay3_6.jpg",
          ],
          highlight: "/images/highlights/thay/thaylongtalay3/thaylongtalay3_cover.jpg",
        },
      },
    ],
    buttons: [
      { label: "MENU", href: "https://drive.google.com/file/d/1c2fQdMh5ksObkT5zKT0Zyrz-GN8w8cGP/view", external: true },
      { label: "EVENT HIGHLIGHTS", href: "/thay/highlight" },
    ],
    gallery: [thay_1, thay_2, thay_3, thay_4],
    themeVars: {
      "--quote-size": "42px",
      "--para-size": "17px",
      "--bg": "#0a100b",
    },
    quoteIcons: { top: "left", bottom: "right" },   // ← per your spec
    paraAlign: ["center", "center", "center"],      // all centered
  },

  tderm: {
    year: "2017",
    title: "TDERM",
    accent: "tderm",
    heroImage: slide2,
    quotes: [
      "The Heart of Modern Nightlife-",
      "TDERM is more than a nightlife spot — it’s the city’s vibrant hub.",
    ],
    paragraphs: [
      "Building on its growth in 2017, TDERM has established itself as a modern nightlife destination in the city. Equipped with state-of-the-art light and sound systems, attentive service, and exclusive perks, the venue creates an immersive experience that appeals to college and international students, young professionals, and nightlife enthusiasts alike.",
      "Every visit to TDERM is designed to",
      "connect friends, celebrate milestones, and enjoy the vibrant energy of the night.",
      "From intimate gatherings to lively parties, the venue balances excitement with comfort, offering a space where unforgettable memories are made.",
      "Whether it’s a quiet evening with friends or a dynamic night of music and cocktails,",
    ],
    highlights: [
      ["TDERM"], // para 0
      ["TDERM"], // para 1
      [], [], [], // rest none (optional)
    ],
    eventHighlights: [
      {
        id: "tderm-halloween",
        title: "Event : Halloween",
        gallery: {
          small: [
            "/images/highlights/tderm/halloween/tdermhalloween_1.jpg",
            "/images/highlights/tderm/halloween/tdermhalloween_2.jpg",
            "/images/highlights/tderm/halloween/tdermhalloween_3.jpg",
            "/images/highlights/tderm/halloween/tdermhalloween_4.jpg", // optional (4th~6th)
            "/images/highlights/tderm/halloween/tdermhalloween_5.jpg",
            "/images/highlights/tderm/halloween/tdermhalloween_6.jpg",
          ],
          highlight: "/images/highlights/tderm/halloween/tdermhalloween_cover.jpg",
        },
      },
      {
        id: "tderm-valentine",
        title: "Event : Valentine's Day",
        gallery: {
          small: [
            "/images/highlights/tderm/valentine/tdermvalentine_1.jpg",
            "/images/highlights/tderm/valentine/tdermvalentine_2.jpg",
            "/images/highlights/tderm/valentine/tdermvalentine_3.jpg",
            "/images/highlights/tderm/valentine/tdermvalentine_4.jpg", // optional (4th~6th)
            "/images/highlights/tderm/valentine/tdermvalentine_5.jpg",
            "/images/highlights/tderm/valentine/tdermvalentine_6.jpg",
          ],
          highlight: "/images/highlights/tderm/valentine/tdermvalentine_cover.jpg",
        },
      },
      {
        id: "tderm-xmas",
        title: "Event : X'mas",
        gallery: {
          small: [
            "/images/highlights/tderm/xmas/tdermxmas_1.jpg",
            "/images/highlights/tderm/xmas/tdermxmas_2.jpg",
            "/images/highlights/tderm/xmas/tdermxmas_3.jpg",
            "/images/highlights/tderm/xmas/tdermxmas_4.jpg", // optional (4th~6th)
            "/images/highlights/tderm/xmas/tdermxmas_5.jpg",
            "/images/highlights/tderm/xmas/tdermxmas_6.jpg",
          ],
          highlight: "/images/highlights/tderm/xmas/tdermxmas_cover.jpg",
        },
      },
    ],
    buttons: [
      { label: "MENU", href: "https://drive.google.com/file/d/136Us-TGTSPrj2WyPfRsJWn4S7b7VWhsR/view", external: true },
      { label: "EVENT HIGHLIGHTS", href: "/tderm/highlight" },
    ],
    gallery: [tderm_1, tderm_2, tderm_3, tderm_4],
    themeVars: { "--bg": "#0f0d0b" },
    quoteIcons: { top: "center", bottom: "center" },
    paraAlign: ["center", "left", "right", "center", "center"],
  },

  got: {
    year: "2024",
    title: "GOT",
    accent: "got",
    heroImage: slide3,
    quotes: [
      "Where Nostalgia Meets Modern Elegance-",
      "GOT: Good Old Times — a timeless space for friends and moments.",
    ],
    paragraphs: [
      "Building on its 1980s-inspired concept, Good Old Times (GOT) offers a timeless yet modern experience. Every detail, from vintage décor and warm ambient lighting to signature cocktails, is curated to create a space that celebrates the charm of the past while embracing the style of today.",
      "Whether you’re gathering with friends, enjoying a quiet evening, or celebrating a special occasion, GOT provides a warm and inviting atmosphere where every visit feels like stepping into a cherished memory.",
    ],
    highlights: [
      ["Good Old Times (GOT)"], // para 0
      ["GOT"],                  // para 1
    ],
    eventHighlights: [
      {
        id: "got-special-guest",
        title: "Event : Special Guest DJ & Party",
        gallery: {
          small: [
            "/images/highlights/got/guest/gotguest_1.jpg",
            "/images/highlights/got/guest/gotguest_2.jpg",
            "/images/highlights/got/guest/gotguest_3.jpg",
            "/images/highlights/got/guest/gotguest_4.jpg", // optional (4th~6th)
            "/images/highlights/got/guest/gotguest_5.jpg",
            "/images/highlights/got/guest/gotguest_6.jpg",
          ],
          highlight: "/images/highlights/got/guest/gotguest_cover.jpg",
        },
      },
      {
        id: "got-xmas",
        title: "Event : Xmas",
        gallery: {
          small: [
            "/images/highlights/got/xmas/gotxmas_1.jpg",
            "/images/highlights/got/xmas/gotxmas_2.jpg",
            "/images/highlights/got/xmas/gotxmas_3.jpg",
          ],
          highlight: "/images/highlights/got/xmas/gotxmas_cover.jpg",
        },
      },
      {
        id: "got-chinese-new-year",
        title: "Event : Chinese New Year",
        gallery: {
          small: [
            "/images/highlights/got/cny/gotcny_1.jpg",
            "/images/highlights/got/cny/gotcny_2.jpg",
            "/images/highlights/got/cny/gotcny_3.jpg",
          ],
          highlight: "/images/highlights/got/cny/gotcny_cover.jpg",
        },
      },
      {
        id: "got-valentine",
        title: "Event : Valentine's Day",
        gallery: {
          small: [
            "/images/highlights/got/valentine/gotvalentine_1.jpg",
            "/images/highlights/got/valentine/gotvalentine_2.jpg",
            "/images/highlights/got/valentine/gotvalentine_3.jpg",
          ],
          highlight: "/images/highlights/got/valentine/gotvalentine_cover.jpg",
        },
      },
      {
        id: "got-parade",
        title: "Event : Parade",
        gallery: {
          small: [
            "/images/highlights/got/parade/gotparade_1.jpg",
            "/images/highlights/got/parade/gotparade_2.jpg",
            "/images/highlights/got/parade/gotparade_3.jpg",
          ],
          highlight: "/images/highlights/got/parade/gotparade_cover.jpg",
        },
      },
    ],
    buttons: [
      { label: "MENU", href: "https://drive.google.com/file/d/1Ik-5Mut9Amy8vY-ychLhsTIw-xJRfnvL/view", external: true },
      { label: "EVENT HIGHLIGHTS", href: "/got/highlight" },
    ],
    gallery: [got_1, got_2, got_3, got_4],
    themeVars: { "--bg": "#14120e" },
    quoteIcons: { top: "right", bottom: "left" },
    paraAlign: ["left", "right"],
  },

  rec: {
    year: "2025",
    title: "REC",
    accent: "rec",
    heroImage: slide4,
    quotes: [
      "Where Nostalgia Meets Modern Elegance-",
      "REC : Record Room —transforms every night into a destination of style, music, and unforgettable moments.",
    ],
    paragraphs: [
      "REC redefines luxury nightlife, blending sophistication with vibrant energy. At its heart is the DJ Corner, designed like a recording studio, where music sets the tone of the night.",
      "The modern-classic décor, with stone and warm neutral tones, creates a glamorous yet welcoming atmosphere. A striking highlight is the Metronome Details, a large centerpiece placed on the share table at the venue’s center — fully movable and designed to symbolize the rhythm that drives REC.",
      "Completing the experience is the High-Energy Bar, serving signature cocktails crafted to amplify the beat. More than a venue",
    ],
    // align highlights with paragraphs (2 paras)
    highlights: [
      ["REC", "DJ Corner"],               // para 0
      ["Metronome Details", "REC"],       // para 1
    ],

    eventHighlights: [
      {
        id: "rec-opening",
        title: "Event : Opening",
        gallery: {
          small: [
            "/images/highlights/rec/opening/recopening_1.jpg",
            "/images/highlights/rec/opening/recopening_2.jpg",
            "/images/highlights/rec/opening/recopening_3.jpg",
            "/images/highlights/rec/opening/recopening_4.jpg", // optional (4th~6th)
            "/images/highlights/rec/opening/recopening_5.jpg",
            "/images/highlights/rec/opening/recopening_6.jpg",
          ],
          highlight: "/images/highlights/rec/opening/recopening_cover.jpg",
        },
      },
      {
        id: "thay-vineriaxemie",
        title: "Event : Vineria X Emie",
        gallery: {
          small: [
            "/images/highlights/rec/vineriaxemie/vineriaxemie_1.jpg",
            "/images/highlights/rec/vineriaxemie/vineriaxemie_2.jpg",
            "/images/highlights/rec/vineriaxemie/vineriaxemie_3.jpg",
            "/images/highlights/rec/vineriaxemie/vineriaxemie_4.jpg", // optional (4th~6th)
            "/images/highlights/rec/vineriaxemie/vineriaxemie_5.jpg",
            "/images/highlights/rec/vineriaxemie/vineriaxemie_6.jpg",
          ],
          highlight: "/images/highlights/rec/vineriaxemie/vineriaxemie_cover.jpg",
        },
      },
    ],
    
    buttons: [
      { label: "MENU", href: "https://drive.google.com/file/d/1TmDyw_KAAlZF-VI5-cwvxGW71Uj1Vyrw/view", external: true },
      { label: "EVENT HIGHLIGHTS", href: "/rec/highlight" },
    ],
    gallery: [rec_1, rec_2, rec_3, rec_4],
    themeVars: { "--bg": "#141312" },
        quoteIcons: { top: "left", bottom: "right" },
        paraAlign: ["left", "right", "left"],
  },
};
