import JavaScriptIcon from "./assets/skill_icons/javascript-js.png";
import tsLogo from "./assets/skill_icons/tsLogo.png";
import javaLogo from "./assets/skill_icons/javaLogo.png";
import reactLogo from "./assets/skill_icons/reactLogo.png";
import nextjsLogo from "./assets/skill_icons/nextjsLogo.png";
import vueLogo from "./assets/skill_icons/vueLogo.png";
import springBootLogo from "./assets/skill_icons/springBootLogo.png";
import nodeLogo from "./assets/skill_icons/nodeLogo.png";
import reduxLogo from "./assets/skill_icons/reduxLogo.png";
import tailwindLogo from "./assets/skill_icons/tailwindLogo.png";
import boostrapLogo from "./assets/skill_icons/boostrapLogo.png";
import wpLogo from "./assets/skill_icons/wpLogo.png";
import figmaLogo from "./assets/skill_icons/figmaLogo.png";
import cPanelLogo from "./assets/skill_icons/linux-panel-logo.png";

const data = {
  tr: {
    header: {
      darkmode: "GECE MODU",
      lightmode: "GÜNDÜZ MODU",
      languagetxt: "İNGİLİZCEYE",
      language: " GEÇ",
      skill: "Beceriler",
      proje: "Projeler",
      contact: "İletişim!",
    },
    introduction: {
      greeting1: "Merhaba,ben ",
      greeting2: "Batuhan Sena Sert",
      greeting3: "Full Stack Developer",
      greeting4: "Frontend Developer",
      greeting5: "Backend Developer",
      p1: "Merhaba,ben Batuhan.Bir web geliştiriciyim. Sağlam ve ölçeklenebilir ön uç ürünleri oluşturmak ve harika kullanıcı deneyimleri sunmak için buradayım. Benimle tanışmak isterseniz, aşağıdaki kanallardan bana ulaşabilirsiniz.",
      iletişim1: "İletişim",
      iletişim2: "Github",
      iletişim3: "LinkedIn",
    },
    skills: {
      title: "Beceriler",
      skillerim: [
        {
          name: "JavaScript",
          icon: JavaScriptIcon,
        },
        {
          name: "TypeScript",
          icon: tsLogo,
        },
        {
          name: "Java",
          icon: javaLogo,
        },
        {
          name: "React",
          icon: reactLogo,
        },
        {
          name: "Next.js",
          icon: nextjsLogo,
        },
        {
          name: "Vue.js",
          icon: vueLogo,
        },
        {
          name: "Spring Boot",
          icon: springBootLogo,
        },
        {
          name: "Node.Js",
          icon: nodeLogo,
        },
        {
          name: "Redux",
          icon: reduxLogo,
        },
        {
          name: "TailwindCSS",
          icon: tailwindLogo,
        },
        {
          name: "Boostrap",
          icon: boostrapLogo,
        },
        {
          name: "Wordpress",
          icon: wpLogo,
        },
        {
          name: "Figma",
          icon: figmaLogo,
        },
        {
          name: "cPanel",
          icon: cPanelLogo,
        },
      ],
    },
    profile: {
      title: "Profil",
      basicinfo: {
        birthdatekey: "Doğum Tarihi",
        birthdate: "20.11.1997",
        locationkey: "İkamet Şehri",
        location: "Muğla",
        edukey: "Eğitim Durumu",
        edu: "Akdeniz Ünv. Yönetim Bilişim Sistemleri Lisans, 2023",
        rolekey: "Tercih Ettiği Rol",
        role: "Frontend, UI",
      },
      aboutme: {
        title: "Hakkımda",
        p1: " Lorem ipsum, dolor sit amet consectetur adipisicing elit. Veniam aut, odit laborum aliquam voluptatum nisi mollitia.",
        p2: "Mnima accusamus ratione soluta aperiam sit voluptate? Dicta quod deserunt quam temporibus cumque magnam! ",
      },
    },
    projects: {
      title: "Projeler",
      project1: {
        title: "Pizza Siparişi",
        p1: "A simple, customizable, minimal setup cookie plugin that allows your users to select which cookies to accept or decline. This was created with vanilla JS, SCSS and Parcel Bundler and is available as a NPM package and the git repository makes any type of customization to code and themes possible.",
        tags: ["JS", "React", "Axios", "Router", "Context"],
        links: {
          git: "Github",
          redirect: "Siteye git ",
        },
        link: "linkgelecek.com",
        image: "/project-img/projeResim1.png",
      },
      project2: {
        title: "Redux Filmler",
        p1: "Bu projede, ilginizi çeken filmin detaylarını görüntüleyebilir, değiştirmek istediğiniz bilgileri değiştirebilir ve yeni bir film ekleyebilirsiniz. Ek olarak, en sevdiğiniz filmleri favoriler listesine ekleyebilirsiniz. Bileşenler arasındaki veri aktarımı, Redux kitaplığı kullanılarak gerçekleştirilir.",
        tags: ["react", "redux", "axios", "router", "vercel"],
        links: {
          git: "Github",
          redirect: "Uygulamaya git ",
        },
        link: "linkgelecek.com",
        image: "/project-img/projeResim2.png",
      },
      project3: {
        title: "Redux Filmler",
        p1: "Bu projede, ilginizi çeken filmin detaylarını görüntüleyebilir, değiştirmek istediğiniz bilgileri değiştirebilir ve yeni bir film ekleyebilirsiniz. Ek olarak, en sevdiğiniz filmleri favoriler listesine ekleyebilirsiniz. Bileşenler arasındaki veri aktarımı, Redux kitaplığı kullanılarak gerçekleştirilir.",
        tags: ["react", "redux", "axios", "router", "vercel"],
        links: {
          git: "Github",
          redirect: "Uygulamaya git ",
        },
        link: "linkgelecek.com",
        image: "/project-img/projeResim3.png",
      },
    },
    footer: {
      title: "Bir sonraki ürününüz üzerinde birlikte çalışalım.",
      links: {
        git: "Github",
        blog: "Kişisel Blog",
        linkedin: "Linkedin",
        email: "batuhansenasert@gmail.com",
      },
    },
  },
  en: {
    header: {
      darkmode: "DARK MODE",
      lightmode: "LIGHT MODE",
      language: "SWITCH TO",
      languagetxt: " TURKISH",
      skill: "Skills",
      proje: "Projects",
      contact: "Contact!",
    },
    introduction: {
      greeting1: "Hi, I'm ",
      greeting2: "Batuhan Sena Sert",
      greeting3: "Full Stack Developer",
      greeting4: "Frontend Developer",
      greeting5: "Backend Developer",
      p1: "Hi, I'm Batuhan. I'm a web developer. I'm here to create robust and scalable frontend products and provide great user experiences. If you'd like to get to know me, you can reach me through the channels below.",
      contact1: "batuhansenasert@gmail.com",
      contact2: "https://github.com/BSenaS",
      contact3: "https://www.linkedin.com/in/bssert/",
      iletişim1: "Contact",
      iletişim2: "Github",
      iletişim3: "LinkedIn",
    },
    skills: {
      title: "Skills",
      skillerim: [
        {
          name: "JavaScript",
          icon: JavaScriptIcon,
        },
        {
          name: "TypeScript",
          icon: tsLogo,
        },
        {
          name: "Java",
          icon: javaLogo,
        },
        {
          name: "React",
          icon: reactLogo,
        },
        {
          name: "Next.js",
          icon: nextjsLogo,
        },
        {
          name: "Vue.js",
          icon: vueLogo,
        },
        {
          name: "Spring Boot",
          icon: springBootLogo,
        },
        {
          name: "Node.Js",
          icon: nodeLogo,
        },
        {
          name: "Redux",
          icon: reduxLogo,
        },
        {
          name: "TailwindCSS",
          icon: tailwindLogo,
        },
        {
          name: "Boostrap",
          icon: boostrapLogo,
        },
        {
          name: "Wordpress",
          icon: wpLogo,
        },
        {
          name: "Figma",
          icon: figmaLogo,
        },
        {
          name: "cPanel",
          icon: cPanelLogo,
        },
      ],
    },
    profile: {
      title: "Profile",
      basicinfo: {
        birthdatekey: "Date of Birth",
        birthdate: "20.11.1997",
        locationkey: "City of Residence",
        location: "Muğla",
        edukey: "Education",
        edu: "Akdeniz University, Management Information Systems Bachelor's Degree, 2023",
        rolekey: "Preferred Role",
        role: "Frontend, UI",
      },
      aboutme: {
        title: "About Me",
        p1: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam aut odit laborum aliquam voluptatum nisi mollitia.",
        p2: "Mnima accusamus ratione soluta aperiam sit voluptate? Dicta quod deserunt quam temporibus cumque magnam!",
      },
    },

    projects: {
      title: "Projeler",
      project1: {
        title: "Workintech",
        p1: "A simple, customizable, minimal setup cookie plugin that allows your users to select which cookies to accept or decline. This was created with vanilla JS, SCSS and Parcel Bundler and is available as a NPM package and the git repository makes any type of customization to code and themes possible.",
        tags: ["JS", "React", "Axios", "Router", "Context"],
        links: {
          git: "Github",
          redirect: "Visit Site",
        },
        link: "linkgelecek.com",
        image: "/project-img/projeResim1.png",
      },
      project2: {
        title: "Random Jokes",
        p1: "A simple, customizable, minimal setup cookie plugin that allows your users to select which cookies to accept or decline. This was created with vanilla JS, SCSS and Parcel Bundler and is available as a NPM package and the git repository makes any type of customization to code and themes possible.",
        tags: ["react", "redux", "axios", "router"],
        links: {
          git: "Github",
          redirect: "Visit Site",
        },
        link: "linkgelecek.com",
        image: "/project-img/projeResim2.png",
      },
      project3: {
        title: "Journey",
        p1: "A simple, customizable, minimal setup cookie plugin that allows your users to select which cookies to accept or decline. This was created with vanilla JS, SCSS and Parcel Bundler and is available as a NPM package and the git repository makes any type of customization to code and themes possible.",
        tags: ["react", "redux", "axios", "router"],
        links: {
          git: "Github",
          redirect: "Visit Site",
        },
        link: "linkgelecek.com",
        image: "/project-img/projeResim3.png",
      },
    },
    footer: {
      title: "Let's work together on your next product.",
      links: {
        git: "Github",
        blog: "Personal Blog",
        linkedin: "Linkedin",
        email: "batuhansenasert@gmail.com",
      },
    },
  },
};

export default data;
