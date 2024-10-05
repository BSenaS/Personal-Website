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
      p1: "Merhaba, ben Batuhan. Web geliştirme alanında uzmanlaşmış bir freelance Web Developer. E-ticaret çözümleri, portfolyo siteleri ve otomasyon sistemleri gibi farklı projelerde deneyimim var. Sorunlarınıza çözüm üretmek için buradayım. Aşağıda yaptığım çalışmaları inceleyebilirsiniz.",
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
        role: "Full Stack Web Dev",
      },
      aboutme: {
        title: "Hakkımda",
        p1: "Üniversiteden mezun olduktan sonra kendimi web alanında geliştirmeye adadım. React, Vue, Next.js, Java gibi teknolojilerle sizler için tam yığın (full-stack) uygulamalar geliştiriyorum.",
        p2: "Zamanımı genellikle teknoloji içerikleri tüketerek geçirirsem de, yüzme, basketbol, avlanma gibi hobilerim var.",
      },
    },
    projects: {
      title: "Projeler",
      project1: {
        title: "E-commerce",
        p1: "Kullanıcı girişinin yapılabildiği, ürünlerin sepete eklenebildiği, istenilen kategoriye göre filtreleme yapılabildiği ve ürün satın alımının gerçekleştirilebildiği bir e-ticaret projesi.",
        tags: [
          "JavaScript",
          "React",
          "Axios",
          "React Router",
          "Context",
          "Redux",
          "Toastify",
          "Tailwind",
          "React-Form",
          "Logger-Thunk",
          "React-Pagination",
        ],
        links: {
          git: "https://github.com/BSenaS/E-Commerce",
          redirect: "https://batuhansert-ecommerce.vercel.app/",
        },
        image: "/project-img/e-comm-home.jpeg",
      },
      project2: {
        title: "Skytex Website",
        p1: "Skytex için, tekstil sektörüne özel olarak tasarlanmış, mobil uyumlu ve SEO optimize edilmiş bir kurumsal web sitesi geliştirdim. Projede, kullanıcı deneyimi odaklı bir yaklaşım benimseyerek WordPress gibi güçlü bir CMS kullanarak, şirketin marka kimliğini en iyi şekilde yansıtan bir dijital platform oluşturdum.",
        tags: [
          "JavaScript",
          "Html",
          "Css",
          "Php",
          "c-Panel",
          "Wordpress",
          "Seo",
        ],
        links: {
          git: "https://github.com/BSenaS",
          redirect: "https://www.skytextil.com/",
        },
        image: "/project-img/skytex-home.jpeg",
      },
      project3: {
        title: "Kelime Bilme Oyunu",
        p1: "Türkçe ve İngilizce arasında dinamik dil değiştirme özelliğine sahip bir Heceleme Yarışması kelime tahmin oyunu geliştirdim. Bu oyunu Next.js'in dinamik rotaları kullanarak oluşturdum.",
        tags: [
          "Nextjs",
          "React",
          "App Router",
          "Vercel",
          "Tailwind",
          "Context",
        ],
        links: {
          git: "https://github.com/BSenaS/spelling-bee",
          redirect: "https://spelling-bee-livid.vercel.app/",
        },
        image: "/project-img/spelling-bee.jpeg",
      },
      project4: {
        title: "Pizza Website",
        p1: "Vue.js, TypeScript, Tailwind CSS ve Pinia kullanarak, kullanıcıların pizza siparişlerini kişiselleştirerek oluşturabileceği interaktif bir web uygulaması geliştirdim. Gelişmiş validasyon mekanizmaları ile kullanıcı hatalarını önleyerek sorunsuz bir sipariş süreci sağlandı.",
        tags: [
          "Vue 3",
          "TypeScript",
          "Tailwind",
          "Vercel",
          "Pinia",
          "Vue-Router",
        ],
        links: {
          git: "https://github.com/BSenaS/pizza-vue",
          redirect: "https://pizza-vue.vercel.app/",
        },
        image: "/project-img/pizza-home.jpeg",
      },
      project5: {
        title: "LoL Comp Builder",
        p1: "En çok oynanan online oyunlardan League of Legends için bir tutku projesi geliştirdim. Kullanıcılar bu proje sayesinde takım kompozisyonları oluşturabilir, filtreleyebilir ve oluşturdukları kompozisyonlarla etkileşim kurabilir.",
        tags: [
          "React",
          "JavaScript",
          "Context",
          "Vercel",
          "React Icons",
          "Html",
        ],
        links: {
          git: "https://github.com/BSenaS/proCompsExercise",
          redirect: "https://pro-comps-test-case.vercel.app/",
        },
        image: "/project-img/pro-comps.jpeg",
      },
      project6: {
        title: "Spring Store",
        p1: "Java Spring Boot ve PostgreSQL ile geliştirilmiş basit bir e-ticaret projesinin backend kısmını oluşturan bir REST API'dir. İki temel uç nokta ile farklı uygulamalara hizmet verir.",
        tags: [
          "Java",
          "SpringBoot",
          "PostgreSQL",
          "Jpa",
          "Hibernate",
          "Lombok",
        ],
        links: {
          git: "https://github.com/BSenaS/spring-store/tree/master",
          redirect: "https://github.com/BSenaS/spring-store/tree/master",
        },
        image: "/project-img/java.jpg",
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
      p1: "Hi, I'm Batuhan. I'm a freelance web developer specializing in web development. I have experience in various projects such as e-commerce solutions, portfolio websites, and automation systems. I'm here to solve your problems. You can check out my work below",
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
        p1: "Since graduating from university, I have dedicated myself to honing my skills in web development. I specialize in creating full-stack applications using technologies such as React, Vue, Next.js, and Java.",
        p2: "While I spend much of my time consuming technology content, I also enjoy swimming, basketball, and hunting.",
      },
    },

    projects: {
      title: "Projects",
      project1: {
        title: "E-commerce",
        p1: "An e-commerce project where users can log in, add products to their cart, filter products by category, and complete purchases.",
        tags: [
          "JavaScript",
          "React",
          "Axios",
          "React Router",
          "Context",
          "Redux",
          "Toastify",
          "Tailwind",
          "React-Form",
          "Logger-Thunk",
          "React-Pagination",
        ],
        links: {
          git: "https://github.com/BSenaS/E-Commerce",
          redirect: "https://batuhansert-ecommerce.vercel.app/",
        },
        image: "/project-img/e-comm-home.jpeg",
      },
      project2: {
        title: "Skytex Website",
        p1: "I developed a custom-designed, mobile-friendly, and SEO-optimized corporate website for Skytex specifically tailored to the textile industry. Adopting a user-centric approach, I utilized a powerful CMS like WordPress to create a digital platform that effectively reflects the company's brand identity.",
        tags: [
          "JavaScript",
          "Html",
          "Css",
          "Php",
          "c-Panel",
          "Wordpress",
          "Seo",
        ],
        links: {
          git: "https://github.com/BSenaS",
          redirect: "https://www.skytextil.com/",
        },
        image: "/project-img/skytex-home.jpeg",
      },
      project3: {
        title: "Spelling Bee Game",
        p1: "I've developed a dynamic word guessing game, similar to a spelling bee, that allows users to switch between Turkish and English. The game was built using Next.js's dynamic routing.",
        tags: [
          "Nextjs",
          "React",
          "App Router",
          "Vercel",
          "Tailwind",
          "Context",
        ],
        links: {
          git: "https://github.com/BSenaS/spelling-bee",
          redirect: "https://spelling-bee-livid.vercel.app/",
        },
        image: "/project-img/spelling-bee.jpeg",
      },
      project4: {
        title: "Pizza Website",
        p1: "I've developed an interactive web application using Vue.js, TypeScript, Tailwind CSS, and Pinia that allows users to customize and place pizza orders. The application incorporates robust validation mechanisms to prevent user errors and ensure a smooth ordering process.",
        tags: [
          "Vue 3",
          "TypeScript",
          "Tailwind",
          "Vercel",
          "Pinia",
          "Vue-Router",
        ],
        links: {
          git: "https://github.com/BSenaS/pizza-vue",
          redirect: "https://pizza-vue.vercel.app/",
        },
        image: "/project-img/pizza-home.jpeg",
      },
      project5: {
        title: "LoL Comp Builder",
        p1: "I've developed a passion project for League of Legends, one of the most popular online games, that allows users to create, filter, and interact with team compositions.",
        tags: [
          "React",
          "JavaScript",
          "Context",
          "Vercel",
          "React Icons",
          "Html",
        ],
        links: {
          git: "https://github.com/BSenaS/proCompsExercise",
          redirect: "https://pro-comps-test-case.vercel.app/",
        },
        image: "/project-img/pro-comps.jpeg",
      },
      project6: {
        title: "Spring Store",
        p1: "It's a REST API that serves as the backend for a simple e-commerce project developed using Java, Spring Boot, and PostgreSQL. It offers two primary endpoints to cater to various applications.",
        tags: [
          "Java",
          "SpringBoot",
          "PostgreSQL",
          "Jpa",
          "Hibernate",
          "Lombok",
        ],
        links: {
          git: "https://github.com/BSenaS/spring-store/tree/master",
          redirect: "https://github.com/BSenaS/spring-store/tree/master",
        },
        image: "/project-img/java.jpg",
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
