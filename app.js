const asset = (path) => `./${path}`;

const runtimeProfile = (() => {
  const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const cores = navigator.hardwareConcurrency || 4;
  const memory = navigator.deviceMemory || 4;
  const lowPower = reducedMotion || cores <= 4 || memory <= 4;
  return {
    reducedMotion,
    lowPower,
    targetFps: lowPower ? 30 : 60,
    plasmaDpr: lowPower ? 0.72 : 1,
    galaxyDpr: lowPower ? 0.85 : 1.1,
  };
})();

const projects = [
  {
    id: "future-specimens",
    number: "01",
    title: "FUTURE SPECIMENS 未来标本",
    type: "交互装置",
    year: "2025",
    role: "个人项目",
    cover: "site-assets/work-future-specimens.jpg",
    poster: "site-assets/work-future-specimens.jpg",
    video: "site-assets/video/future-specimens.mp4",
    images: [
      "项目1 FUTURE SPECIMENS 未来标本/1.1.webp",
      "项目1 FUTURE SPECIMENS 未来标本/1.2.webp",
      "项目1 FUTURE SPECIMENS 未来标本/1.3.webp",
      "项目1 FUTURE SPECIMENS 未来标本/1.4.webp",
      "项目1 FUTURE SPECIMENS 未来标本/1.5.webp",
      "项目1 FUTURE SPECIMENS 未来标本/1.6.webp",
    ],
    description:
      "本作品融合了 ASCII 视觉效果、声音设计和物理组件。被视为记忆化石的 CD 不仅是存储工具，也是人类思想、情感和文明的容器，凝固现在供未来解读的数字琥珀。管子和电线象征着信息的传输，而血压计则让人联想到数据的提取。这些元素结合在一起，引人深思：在人工智能时代，我们是否正在成为数据标本？人工智能是否会从创造者转变为考古学家，最终使我们沦为代码行？",
    highlights: [
      "以装置、影像和声音建立完整的沉浸式观看关系。",
      "用“数据标本”的概念讨论 AI 时代的人类记忆与身份。",
      "银灰机械语言与屏幕视觉共同形成媒介艺术气质。",
    ],
  },
  {
    id: "habitual-idling",
    number: "02",
    title: "HABITUAL IDLING 习惯性空转",
    type: "交互式舞蹈 / 沉浸空间 / 数字媒体",
    year: "2025",
    role: "双人项目 / 数字效果创作与设计",
    cover: "site-assets/work-habitual-idling.jpg",
    poster: "site-assets/work-habitual-idling.jpg",
    video: "site-assets/video/habitual-idling.mp4",
    images: [
      "项目2Project 2 HABITUAL IDLING 习惯性空转/2.1.webp",
      "项目2Project 2 HABITUAL IDLING 习惯性空转/2.2.webp",
      "项目2Project 2 HABITUAL IDLING 习惯性空转/2.3.webp",
      "项目2Project 2 HABITUAL IDLING 习惯性空转/2.4.webp",
      "项目2Project 2 HABITUAL IDLING 习惯性空转/2.5.webp",
      "项目2Project 2 HABITUAL IDLING 习惯性空转/2.6.webp",
      "项目2Project 2 HABITUAL IDLING 习惯性空转/2.7.webp",
      "项目2Project 2 HABITUAL IDLING 习惯性空转/2.8.webp",
    ],
    description:
      "《习惯性空转》是在一个被信息淹没的时代里的回应。我们习惯了滑动、点击、切换，不断重复相同的行为，深陷数字旋涡，注意力下降，逐渐失去真实的感受。作品想要通过现场的视觉表演来表达内心的情绪波动，使得情绪波动可视化。使用 TouchDesigner 制作数字效果，投影在空间中，结合舞蹈与装置制作实验影像。",
    highlights: [
      "将抽象的注意力下降与情绪波动转译为实时视觉语言。",
      "结合舞蹈、装置与投影，建立可感知的沉浸空间。",
      "负责数字效果创作，让现场表演拥有可传播的影像质感。",
    ],
  },
  {
    id: "cloud-mirage",
    number: "03",
    title: "CLOUD MIRAGE SANATORIUM 云端幻疗院",
    type: "三维视频",
    year: "2025",
    role: "个人项目",
    cover: "site-assets/work-cloud-mirage.jpg",
    poster: "site-assets/work-cloud-mirage.jpg",
    video: "site-assets/video/cloud-mirage.mp4",
    images: [
      "项目3 云端幻疗院CLOUD MIRAGE SANATORIUM/3.1.webp",
      "项目3 云端幻疗院CLOUD MIRAGE SANATORIUM/3.2.webp",
      "项目3 云端幻疗院CLOUD MIRAGE SANATORIUM/3.3.webp",
      "项目3 云端幻疗院CLOUD MIRAGE SANATORIUM/3.4.webp",
      "项目3 云端幻疗院CLOUD MIRAGE SANATORIUM/3.5.webp",
      "项目3 云端幻疗院CLOUD MIRAGE SANATORIUM/3.6.webp",
      "项目3 云端幻疗院CLOUD MIRAGE SANATORIUM/3.7.webp",
      "项目3 云端幻疗院CLOUD MIRAGE SANATORIUM/3.8.webp",
    ],
    description:
      "使用 C4D 与 OC 进行建模渲染。我的项目探讨了人们如何日益沉浸于数字世界，从而与现实产生脱节。《云端幻疗院》以 3D 影像的形式呈现，构建了一个具有疗愈叙事的空间，用以回应数字沉迷、心理压力与社交孤立等问题。整个治愈路径以熟悉的游乐园结构进行再想象：入园登记如同“售票口”，健康评估如“安检”；放松舱对应温和的“旋转木马”；情绪胶囊象征“过山车”的情绪起伏；数字冥想花园则化作沉思的“摩天轮”。最终，“现实记忆商店”为参与者提供专属纪念印记，作为疗愈旅程的象征。",
    highlights: [
      "完整建立 3D 空间叙事与视觉世界观。",
      "把数字沉迷和心理压力议题转化为可观看的疗愈场景。",
      "银色、蓝色与虚拟设施构成具有科技感的影像美术系统。",
    ],
  },
  {
    id: "solar-terms",
    number: "04",
    title: "Solar Terms Monument 节气丰碑",
    type: "AR / 交互设计 / 产品设计",
    year: "2025",
    role: "个人项目",
    cover: "项目4 24节气丰碑 Solar Terns Monument/封面.webp",
    poster: "项目4 24节气丰碑 Solar Terns Monument/封面.webp",
    video: "site-assets/video/solar-terms.mp4",
    images: [
      "项目4 24节气丰碑 Solar Terns Monument/4.1.webp",
      "项目4 24节气丰碑 Solar Terns Monument/4.2.webp",
      "项目4 24节气丰碑 Solar Terns Monument/4.3.webp",
      "项目4 24节气丰碑 Solar Terns Monument/4.4.webp",
    ],
    description:
      "二十四节气元素正越来越多地出现在文化产品与宣传推广中。虽然人们仍然记得节气的名称，却逐渐失去了对季节变化的真实感知。全球变暖与环境破坏使自然征兆变得不再可靠：春天不再一定温暖，霜降也未必如期出现。因此，我设计了《节气丰碑》（Solar Terms Monument），通过数字丰碑、移动应用与可穿戴玉佩，帮助人们重新观察自然环境，重新连接二十四节气，并反思我们对环境所造成的影响。",
    highlights: [
      "以 AR、移动应用与可穿戴玉佩构成完整交互系统。",
      "将二十四节气从传统符号转化为当代环境观察方式。",
      "通过数字丰碑讨论气候变化与自然感知的断裂。",
    ],
  },
  {
    id: "reality-trace",
    number: "05",
    title: "REALITY TRACE 现实印记",
    type: "3D 打印艺术 / 概念视频",
    year: "2025",
    role: "团队项目 / 3D 打印、视频拍摄、建模",
    cover: "site-assets/work-reality-trace.jpg",
    poster: "site-assets/work-reality-trace.jpg",
    video: "site-assets/video/reality-trace.mp4",
    images: [
      "项目5 现实印记 REALITY TRACE/5.1.webp",
      "项目5 现实印记 REALITY TRACE/5.2.webp",
      "项目5 现实印记 REALITY TRACE/5.3.webp",
      "项目5 现实印记 REALITY TRACE/5.4.webp",
    ],
    description:
      "一次迪士尼之行带来了短暂而乌托邦式的快乐，但这种愉悦在结束后很快转化为空虚。主题乐园像是一种临时性的情绪疗愈，但它的作用往往十分短暂。纪念品因此成为情感记忆的物质化载体：它们的价值并不在于物品本身，而在于被保存下来的感受。本项目尝试探索一种新的纪念品创作方式：它不只是标记某个地点，而是能够重新唤起情绪疗愈的体验。",
    highlights: [
      "将情绪体验转译为可触摸、可保存的实体媒介。",
      "结合 3D 打印、概念影像和建模表达形成完整作品。",
      "从普通纪念品延展到情感疗愈与消费文化讨论。",
    ],
  },
  {
    id: "noise-reduction-life",
    number: "06",
    title: "NOISE REDUCTION LIFE 去噪生命",
    type: "装置设计",
    year: "2026",
    role: "个人项目",
    cover: "site-assets/work-noise-life.jpg",
    poster: "site-assets/work-noise-life.jpg",
    video: "site-assets/video/noise-life.mp4",
    images: [
      "项目6 去噪生命 NOISE REDUCTION LIFE/6.1.webp",
      "项目6 去噪生命 NOISE REDUCTION LIFE/6.2.webp",
      "项目6 去噪生命 NOISE REDUCTION LIFE/6.3.webp",
      "项目6 去噪生命 NOISE REDUCTION LIFE/6.4.webp",
      "项目6 去噪生命 NOISE REDUCTION LIFE/6.5.webp",
      "项目6 去噪生命 NOISE REDUCTION LIFE/6.6.webp",
      "项目6 去噪生命 NOISE REDUCTION LIFE/6.7.webp",
      "项目6 去噪生命 NOISE REDUCTION LIFE/6.8.webp",
    ],
    description:
      "《去噪生命》是一件以人工智能与基因编辑为背景的未来生命思辨装置。作品以扩散模型中的“去噪机制”为隐喻，将图像从噪声逐渐趋于清晰的生成过程，转化为对生命被不断修正与优化的想象。在这一过程中，差异被消解，结构被重组，生命逐步趋向一种稳定而统一的形态。然而，当“完美”被不断逼近时，画面反而呈现出一种不自然的状态，使观众在熟悉与陌生之间产生感知上的偏移。作品试图提出：当技术不断以优化为目标介入生命，是否也在无形中削弱其原本的多样性与不确定性？在一个被持续“去噪”的世界中，人类所面对的，究竟是进化，还是另一种形式的消失。",
    highlights: [
      "把 AI 生成机制转译为生命伦理与装置语言。",
      "以冷静、克制的视觉建立未来实验室般的观看氛围。",
      "在技术美学之外，保留清晰的批判性议题。",
    ],
  },
  {
    id: "an-ko-rau",
    number: "07",
    title: "An Ko Rau 安高若",
    type: "交互装置 / 品牌体验",
    year: "2025",
    role: "多人项目 / 视频拍摄、设计辅助",
    cover: "项目7 安高若/封面.webp",
    poster: "项目7 安高若/封面.webp",
    video: "site-assets/video/an-ko-rau.mp4",
    images: [
      "项目7 安高若/7.1.webp",
      "项目7 安高若/7.2.webp",
      "项目7 安高若/7.3.webp",
      "项目7 安高若/7.4.webp",
      "项目7 安高若/7.5.webp",
      "项目7 安高若/7.6.webp",
      "项目7 安高若/7.7.webp",
      "项目7 安高若/7.8.webp",
    ],
    description:
      "An Ko Rau 是 Suran 旗下的运动生活方式品牌，围绕“持续运动”的概念展开。其平铺式视觉强调从城市环境到户外场景之间的自然衔接与无缝过渡。品牌专注于多场景、通用型的服装廓形，并采用兼具环保意识与功能表现的面料，例如 Polartec Alpha。视觉上，品牌将专属的 An Ko Rau Sans 字体与明亮、干净的色彩搭配结合，传达出轻松、有趣且经过深思熟虑的设计感，把运动从竞技竞争中解放出来，转化为一种值得享受的生活方式。我们围绕这个品牌和当季新品黑马出行进行了设计。",
    highlights: [
      "参与商业品牌线下体验与互动装置落地。",
      "负责视频拍摄与视觉辅助，让项目具备传播素材完整度。",
      "在运动生活方式语境中保留轻松、明亮和可参与的品牌感。",
    ],
  },
  {
    id: "connector",
    number: "08",
    title: "CONNECTOR 产品设计",
    type: "3D 打印产品设计",
    year: "2026",
    role: "个人项目",
    cover: "site-assets/work-connector.jpg",
    poster: "site-assets/work-connector.jpg",
    video: "项目8 CONNECTOR 产品设计/视频1.mp4",
    images: [
      "项目8 CONNECTOR 产品设计/8.1.webp",
      "项目8 CONNECTOR 产品设计/8.2.webp",
      "项目8 CONNECTOR 产品设计/8.3.png",
      "项目8 CONNECTOR 产品设计/8.4.webp",
      "项目8 CONNECTOR 产品设计/8.5.webp",
      "项目8 CONNECTOR 产品设计/8.6.png",
    ],
    description:
      "本项目围绕 THE3 品牌周边进行一次产品化尝试，将 3D 打印工艺与 NFC 芯片技术结合，探索实体周边与数字内容之间的连接方式。用户只需通过手机轻触装置，即可快速打开 THE3 官方插件库，使周边不再只是视觉纪念品，而成为连接品牌内容、创作工具与用户体验的交互入口。",
    highlights: [
      "从品牌周边延展到可交互的数字入口。",
      "结合 3D 打印工艺、NFC 技术和产品视觉包装。",
      "让产品同时具备纪念性、工具性与传播性。",
    ],
  },
  {
    id: "leapmotor-a10",
    number: "09",
    title: "Leapmotor A10 零跑汽车改装",
    type: "汽车改装 / 周边设计",
    year: "2026",
    role: "团队项目 / 周边设计、汽车图案设计",
    cover: "site-assets/work-a10.jpg",
    poster: "site-assets/work-a10.jpg",
    images: [
      "项目9 零跑A10 汽车改装/9.1.webp",
      "项目9 零跑A10 汽车改装/9.2.webp",
      "项目9 零跑A10 汽车改装/9.3.webp",
      "项目9 零跑A10 汽车改装/9.4.webp",
      "项目9 零跑A10 汽车改装/9.5.webp",
      "项目9 零跑A10 汽车改装/9.6.webp",
    ],
    featureLink: {
      title: "5天极限改装挑战：移动的许愿杂货铺【贴地飞行-三代】",
      url: "https://www.bilibili.com/video/BV1FY5v6BE6Y/?share_source=copy_web&vd_source=8e15a20a599725374341494e3836ccdf",
      stats: "取得 133 万播放、3.5 万点赞的成绩。",
    },
    description:
      "本项目围绕零跑 A10 的品牌传播场景展开，以“许愿都灵”与“移动许愿车”为核心概念，探索汽车品牌、城市情绪与用户互动之间的连接。我主要负责项目周边内容的设计与落地，通过将品牌视觉、许愿互动与移动场景结合，打造具有传播感和参与感的品牌周边，使用户在体验过程中形成对零跑 A10 的情感记忆与品牌认同。",
    highlights: [
      "将汽车改装、品牌视觉与用户互动整合为传播场景。",
      "负责周边内容与车身图案设计，强调参与感和记忆点。",
      "在商业项目中建立具有情绪价值的视觉叙事。",
    ],
  },
];

const channels = [
  {
    label: "Bilibili / Automotive",
    title: "贴地飞行汽车区账号",
    text: "拥有粉丝 45.6W，播放量 1000W。大学生方程式官方合作媒体，2025 年 B 站黑马 UP 主，长期面向汽车与方程式硬核兴趣人群。",
    url: "https://space.bilibili.com/1617515924?spm_id_from=333.337.0.0",
    status: "打开 B 站主页",
    caseCover: "site-assets/channel-automotive-case.webp",
    caseUrl: "https://www.bilibili.com/video/BV1haMh6cEp7/?spm_id_from=333.1387.homepage.video_card.click",
    caseTitle: "案例视频",
  },
  {
    label: "Bilibili / Digital DIY",
    title: "柯耐德数码账号",
    text: "拥有 23W 粉丝，2400W 播放量，聚焦 PC 硬件、数码 DIY 与产品评测，形成稳定的硬件内容生产与商业合作能力。",
    url: "https://space.bilibili.com/285881562?spm_id_from=333.337.0.0",
    status: "打开 B 站主页",
    caseCover: "国产芯片.webp",
    caseUrl: "https://www.bilibili.com/video/BV1dY411j73q/?spm_id_from=333.1387.homepage.video_card.click",
    caseTitle: "案例视频",
  },
];

const workGrid = document.querySelector("[data-work-grid]");
const modal = document.querySelector("[data-modal]");
const modalContent = document.querySelector("[data-modal-content]");
const channelGrid = document.querySelector("[data-channel-grid]");
const mediaLightbox = document.querySelector("[data-media-lightbox]");
const lightboxImage = document.querySelector("[data-lightbox-image]");
let lastLightboxTrigger = null;
let activeVideoObserver = null;

function projectCard(project) {
  const button = document.createElement("button");
  button.className = "project-card";
  button.type = "button";
  button.dataset.project = project.id;
  button.innerHTML = `
    <span class="project-copy">
      <small>${project.number} // PROJECT</small>
      <strong>${project.title}</strong>
      <em>${project.type}</em>
      <span class="view-case">View Case</span>
    </span>
    <span class="project-cover">
      <img src="${asset(project.cover)}" alt="${project.title}" loading="lazy" decoding="async" fetchpriority="low" />
    </span>
  `;
  button.addEventListener("click", () => openProject(project.id));
  return button;
}

function renderProjects() {
  workGrid.innerHTML = "";
  projects.forEach((project) => workGrid.appendChild(projectCard(project)));
}

function renderProjectGallery(project) {
  const stickerImages =
    project.id === "leapmotor-a10" ? project.images.filter((image) => image.includes("贴纸")) : [];
  const regularImages =
    project.id === "leapmotor-a10"
      ? project.images.filter((image) => !image.includes("贴纸"))
      : project.images;
  const regularMarkup = regularImages
    .map(
      (image) => `
        <a class="media-tile" href="${asset(image)}" data-lightbox-trigger aria-label="放大查看 ${project.title}">
          <img src="${asset(image)}" alt="${project.title}" loading="lazy" decoding="async" fetchpriority="low" />
          <span class="media-open" aria-hidden="true">+</span>
        </a>
      `,
    )
    .join("");
  const stickerMarkup = stickerImages.length
    ? `<div class="sticker-row">${stickerImages
        .map(
          (image) => `
            <a class="sticker-image-link" href="${asset(image)}" data-lightbox-trigger aria-label="放大查看 ${project.title} 贴纸">
              <img class="sticker-image" src="${asset(image)}" alt="${project.title} 贴纸" loading="lazy" decoding="async" fetchpriority="low" />
              <span class="media-open" aria-hidden="true">+</span>
            </a>
          `,
        )
        .join("")}</div>`
    : "";

  return `${regularMarkup}${stickerMarkup}`;
}

function renderDetailHeroMedia(project) {
  if (project.video) {
    return `
      <video class="detail-hero-video" autoplay muted loop playsinline preload="metadata" poster="${asset(project.poster)}">
        <source src="${asset(project.video)}" type="video/mp4" />
      </video>
    `;
  }

  return `<img src="${asset(project.cover)}" alt="${project.title}" decoding="async" />`;
}

function renderDetailTitle(title) {
  const chineseIndex = title.search(/[\u3400-\u9fff]/);
  if (chineseIndex === -1) return title;

  const englishTitle = title.slice(0, chineseIndex).trim();
  const chineseTitle = title.slice(chineseIndex).trim();

  return `
    <span class="detail-title-en">${englishTitle}</span>
    <span class="detail-title-cn">${chineseTitle}</span>
  `;
}

function renderFeatureLink(project) {
  if (!project.featureLink) return "";

  return `
    <a class="bilibili-link" href="${project.featureLink.url}" target="_blank" rel="noreferrer">
      <span class="bilibili-mark" aria-hidden="true">bilibili</span>
      <span>
        <strong>${project.featureLink.title}</strong>
        <small>${project.featureLink.stats}</small>
      </span>
    </a>
  `;
}

function openProject(projectId) {
  const project = projects.find((item) => item.id === projectId);
  if (!project) return;

  modalContent.classList.remove("is-copy-hidden");

  const meta = [`创作年份：${project.year}`, `创作类型：${project.type}`, project.role]
    .map((item) => `<span>${item}</span>`)
    .join("");
  const gallery = renderProjectGallery(project);
  const featureLink = renderFeatureLink(project);
  const heroMedia = renderDetailHeroMedia(project);

  modalContent.innerHTML = `
    <section class="modal-hero detail-hero-full" data-project-hero>
      <div class="detail-hero-media">
        ${heroMedia}
      </div>
      ${
        project.video
          ? `<button class="detail-fullscreen-button" type="button" data-fullscreen-video aria-label="全屏播放" title="全屏播放">
              <span></span><span></span><span></span><span></span>
            </button>`
          : ""
      }
      <div class="detail-hero-copy" data-hero-copy>
        <div class="modal-meta">${meta}</div>
        <span class="detail-playline">${project.video ? "Now Playing" : "Project Still"}</span>
        <h2>${renderDetailTitle(project.title)}</h2>
      </div>
    </section>
    <section class="modal-body detail-story">
      <div class="detail-intro">
        <h3>Project Concept</h3>
        <p>${project.description}</p>
      </div>
      <div class="detail-highlights">
        <h3>Core Highlights</h3>
        <ul>${project.highlights.map((item) => `<li>${item}</li>`).join("")}</ul>
        ${featureLink}
      </div>
    </section>
    <section class="detail-gallery" aria-label="${project.title} 图片展示">
      ${gallery}
    </section>
  `;

  modal.classList.add("is-open");
  modal.setAttribute("aria-hidden", "false");
  document.body.classList.add("modal-open");
  document.dispatchEvent(new CustomEvent("portfolio:modal", { detail: { open: true } }));
  const heroVideo = modalContent.querySelector(".detail-hero-video");
  const projectHero = modalContent.querySelector("[data-project-hero]");
  const fullscreenButton = modalContent.querySelector("[data-fullscreen-video]");
  if (heroVideo) {
    heroVideo.play().catch(() => {});
    activeVideoObserver?.disconnect();
    activeVideoObserver = null;
    if ("IntersectionObserver" in window) {
      try {
        activeVideoObserver = new IntersectionObserver(
          ([entry]) => {
            if (entry.isIntersecting && modal.classList.contains("is-open") && !document.hidden) {
              heroVideo.play().catch(() => {});
            } else {
              heroVideo.pause();
            }
          },
          { root: modal.querySelector(".modal-panel"), threshold: 0.08 },
        );
        activeVideoObserver.observe(projectHero);
      } catch (error) {
        console.warn("[portfolio] project video observer unavailable", error);
      }
    }

    projectHero?.addEventListener("click", (event) => {
      if (event.target.closest("button, a")) return;
      modalContent.classList.toggle("is-copy-hidden");
      heroVideo.play().catch(() => {});
    });

    fullscreenButton?.addEventListener("click", () => {
      const fullscreenTarget = heroVideo.requestFullscreen ? heroVideo : projectHero;
      fullscreenTarget?.requestFullscreen?.();
    });
  }

  window.setTimeout(forceRevealAll, 2000);
}

function initPlasmaBackground() {
  const canvas = document.querySelector("[data-plasma-canvas]");
  if (!canvas) return;
  const hero = document.querySelector(".hero");

  const gl = canvas.getContext("webgl2", {
    alpha: true,
    antialias: false,
    premultipliedAlpha: false,
    powerPreference: runtimeProfile.lowPower ? "low-power" : "high-performance",
  });
  if (!gl) {
    canvas.classList.add("is-fallback");
    return;
  }

  const vertexSource = `#version 300 es
    in vec2 position;
    void main() {
      gl_Position = vec4(position, 0.0, 1.0);
    }
  `;
  const fragmentSource = `#version 300 es
    precision highp float;
    uniform vec2 uResolution;
    uniform vec2 uMouse;
    uniform float uTime;
    uniform float uOpacity;
    out vec4 fragColor;

    void main() {
      vec2 uv = (gl_FragCoord.xy * 2.0 - uResolution.xy) / min(uResolution.x, uResolution.y);
      vec2 mouse = (uMouse * 2.0 - 1.0) * vec2(uResolution.x / uResolution.y, 1.0);
      uv = uv / 1.8 + mouse * 0.075;
      float t = uTime * 0.6;
      float field = sin(uv.x * 3.1 + t);
      field += sin(uv.y * 4.0 - t * 1.15);
      field += sin((uv.x + uv.y) * 2.7 + t * 0.72);
      field += sin(length(uv - mouse * 0.12) * 7.0 - t * 1.35);
      float plasma = 0.5 + 0.5 * sin(field * 1.18);
      float core = smoothstep(0.52, 0.98, plasma);
      float haze = smoothstep(0.24, 0.82, plasma) * 0.35;
      vec3 deepBlue = vec3(0.035, 0.19, 0.43);
      vec3 electricBlue = vec3(0.23, 0.77, 0.96);
      vec3 color = mix(deepBlue, electricBlue, core) * (haze + core * 1.1);
      fragColor = vec4(color, (haze + core * 0.72) * uOpacity);
    }
  `;

  const compile = (type, source) => {
    const shader = gl.createShader(type);
    gl.shaderSource(shader, source);
    gl.compileShader(shader);
    if (!gl.getShaderParameter(shader, gl.COMPILE_STATUS)) {
      console.warn(gl.getShaderInfoLog(shader));
      gl.deleteShader(shader);
      return null;
    }
    return shader;
  };

  const vertex = compile(gl.VERTEX_SHADER, vertexSource);
  const fragment = compile(gl.FRAGMENT_SHADER, fragmentSource);
  if (!vertex || !fragment) return;

  const program = gl.createProgram();
  gl.attachShader(program, vertex);
  gl.attachShader(program, fragment);
  gl.linkProgram(program);
  if (!gl.getProgramParameter(program, gl.LINK_STATUS)) {
    console.warn(gl.getProgramInfoLog(program));
    return;
  }

  const buffer = gl.createBuffer();
  gl.bindBuffer(gl.ARRAY_BUFFER, buffer);
  gl.bufferData(gl.ARRAY_BUFFER, new Float32Array([-1, -1, 3, -1, -1, 3]), gl.STATIC_DRAW);
  const position = gl.getAttribLocation(program, "position");
  gl.enableVertexAttribArray(position);
  gl.vertexAttribPointer(position, 2, gl.FLOAT, false, 0, 0);

  const resolution = gl.getUniformLocation(program, "uResolution");
  const mouseUniform = gl.getUniformLocation(program, "uMouse");
  const timeUniform = gl.getUniformLocation(program, "uTime");
  const opacityUniform = gl.getUniformLocation(program, "uOpacity");
  const pointer = { x: 0.5, y: 0.5, tx: 0.5, ty: 0.5 };
  const reducedMotion = runtimeProfile.reducedMotion;
  let heroVisible = true;
  let pageVisible = !document.hidden;
  let modalOpen = false;
  let lastFrame = 0;
  let needsDraw = true;
  let animationFrame = 0;
  canvas.dataset.renderState = "paused";
  canvas.dataset.fpsTarget = String(runtimeProfile.targetFps);

  const resize = () => {
    const dpr = Math.min(window.devicePixelRatio || 1, runtimeProfile.plasmaDpr);
    canvas.width = Math.max(1, Math.floor(window.innerWidth * dpr));
    canvas.height = Math.max(1, Math.floor(window.innerHeight * dpr));
    gl.viewport(0, 0, canvas.width, canvas.height);
    needsDraw = true;
    syncLoop();
  };

  window.addEventListener("pointermove", (event) => {
    pointer.tx = event.clientX / window.innerWidth;
    pointer.ty = 1 - event.clientY / window.innerHeight;
    needsDraw = true;
    syncLoop();
  });
  window.addEventListener("resize", resize);
  document.addEventListener("visibilitychange", () => {
    pageVisible = !document.hidden;
    lastFrame = performance.now();
    needsDraw = true;
    syncLoop();
  });
  document.addEventListener("portfolio:modal", (event) => {
    modalOpen = Boolean(event.detail?.open);
    lastFrame = performance.now();
    syncLoop();
  });
  if (hero) {
    new IntersectionObserver(
      ([entry]) => {
        heroVisible = entry.isIntersecting;
        lastFrame = performance.now();
        needsDraw = true;
        syncLoop();
      },
      { threshold: 0.02 },
    ).observe(hero);
  }
  const isActive = () => pageVisible && !heroVisible && !modalOpen;
  const scheduleFrame = () => {
    if (!animationFrame) animationFrame = requestAnimationFrame(draw);
  };
  const syncLoop = () => {
    const active = isActive();
    canvas.dataset.renderState = active ? "active" : "paused";
    if (!active && animationFrame) {
      cancelAnimationFrame(animationFrame);
      animationFrame = 0;
    } else if (active && (!reducedMotion || needsDraw)) {
      scheduleFrame();
    }
  };
  const draw = (time = 0) => {
    animationFrame = 0;
    if (!isActive()) return;
    if (reducedMotion && !needsDraw) return;
    if (!reducedMotion && time - lastFrame < 1000 / runtimeProfile.targetFps) {
      scheduleFrame();
      return;
    }
    lastFrame = time;
    needsDraw = false;
    pointer.x += (pointer.tx - pointer.x) * 0.045;
    pointer.y += (pointer.ty - pointer.y) * 0.045;
    gl.useProgram(program);
    gl.uniform2f(resolution, canvas.width, canvas.height);
    gl.uniform2f(mouseUniform, pointer.x, pointer.y);
    gl.uniform1f(timeUniform, reducedMotion ? 0 : time * 0.001);
    gl.uniform1f(opacityUniform, 0.34);
    gl.clearColor(0, 0, 0, 0);
    gl.clear(gl.COLOR_BUFFER_BIT);
    gl.drawArrays(gl.TRIANGLES, 0, 3);
    if (!reducedMotion) scheduleFrame();
  };

  resize();
  syncLoop();
}

function initMasonryFrames() {
  if (!("IntersectionObserver" in window)) return false;
  const selectors = [
    ".project-card",
    ".platform-card",
    ".about-portrait",
    ".experience-card",
    ".award-group",
    ".service-grid > article",
    ".channel-card",
    ".contact-link",
    ".detail-story > *",
    ".media-tile",
    ".sticker-image-link",
    ".bilibili-link",
  ];
  const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const pendingMasonry = new Set();
  const revealObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add("is-masonry-visible");
        pendingMasonry.delete(entry.target);
        revealObserver.unobserve(entry.target);
      });
    },
    { threshold: 0.12, rootMargin: "0px 0px -4%" },
  );

  const attach = (element, index) => {
    if (element.dataset.masonryReady) return;
    element.dataset.masonryReady = "true";
    element.classList.add("masonry-frame");
    const isWorkCard = element.matches("#work .project-card");
    element.style.setProperty(
      "--masonry-delay",
      `${isWorkCard ? 260 + Math.min(index, 12) * 180 : 380 + Math.min(index, 12) * 105}ms`,
    );
    element.style.setProperty("--masonry-x", `${isWorkCard ? 180 : index % 2 === 0 ? -52 : 52}px`);
    element.style.setProperty("--masonry-tilt", `${isWorkCard ? 0 : index % 2 === 0 ? -0.7 : 0.7}deg`);
    if (reducedMotion) element.classList.add("is-masonry-visible");
    else {
      pendingMasonry.add(element);
      revealObserver.observe(element);
    }
  };

  const scan = (root = document) => {
    selectors.forEach((selector) => {
      const matches = [];
      if (root instanceof Element && root.matches(selector)) matches.push(root);
      matches.push(...root.querySelectorAll(selector));
      matches.forEach((element, index) => attach(element, index));
    });
  };

  let masonryFrameRequested = false;
  const revealVisibleMasonry = () => {
    masonryFrameRequested = false;
    if (reducedMotion) return;
    pendingMasonry.forEach((element) => {
      if (!element.isConnected || element.classList.contains("is-masonry-visible")) {
        pendingMasonry.delete(element);
        revealObserver.unobserve(element);
        return;
      }
      const rect = element.getBoundingClientRect();
      if (rect.top < window.innerHeight * 0.94 && rect.bottom > 0) {
        element.classList.add("is-masonry-visible");
        pendingMasonry.delete(element);
        revealObserver.unobserve(element);
      }
    });
  };
  const requestMasonryReveal = () => {
    if (masonryFrameRequested) return;
    masonryFrameRequested = true;
    requestAnimationFrame(revealVisibleMasonry);
  };

  scan();
  window.addEventListener("resize", requestMasonryReveal);
  const mutationObserver = new MutationObserver((mutations) => {
    mutations.forEach((mutation) => {
      mutation.addedNodes.forEach((node) => {
        if (node instanceof Element) scan(node);
      });
    });
    requestMasonryReveal();
  });
  mutationObserver.observe(modalContent, { childList: true, subtree: true });
  requestMasonryReveal();
  return true;
}

function initEditorialMotion() {
  if (!("IntersectionObserver" in window)) return false;
  const titleSelectors = [
    ".section-head h2",
    ".about-copy > h2",
    ".awards-heading h2",
    ".channels-section .section-head h2",
    ".contact-section h2",
    ".detail-hero-copy h2",
  ];
  const copySelectors = [
    ".intro-band > .section-kicker",
    ".intro-band > p",
    ".section-head .section-kicker",
    ".section-head > p",
    ".about-copy > .section-kicker",
    ".about-copy > p",
    ".interest-row",
    ".awards-heading .section-kicker",
    ".channels-section .section-head p",
    ".contact-section .section-kicker",
    ".contact-list",
    ".detail-story p",
  ];
  const imageSelectors = [
    ".project-cover",
    ".platform-card",
    ".about-portrait",
    ".channel-video",
    ".media-tile",
    ".sticker-image-link",
  ];
  const parallaxFrames = new Set();
  const activeParallaxFrames = new Set();
  const pendingTitles = new Set();
  const pendingCopies = new Set();
  const pendingImages = new Set();
  const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  const titleObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add("is-editorial-visible");
        pendingTitles.delete(entry.target);
        titleObserver.unobserve(entry.target);
      });
    },
    { threshold: 0.08, rootMargin: "0px 0px -4%" },
  );
  const imageObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add("is-image-revealed");
        pendingImages.delete(entry.target);
        imageObserver.unobserve(entry.target);
      });
    },
    { threshold: 0.16, rootMargin: "0px 0px -4%" },
  );
  const copyObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add("is-motion-copy-visible");
        pendingCopies.delete(entry.target);
        copyObserver.unobserve(entry.target);
      });
    },
    { threshold: 0.1, rootMargin: "0px 0px -3%" },
  );
  const parallaxObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) activeParallaxFrames.add(entry.target);
        else activeParallaxFrames.delete(entry.target);
      });
    },
    { threshold: 0, rootMargin: "120px 0px" },
  );

  const attachTitle = (title) => {
    if (title.dataset.editorialReady) return;
    title.dataset.editorialReady = "true";
    title.classList.add("editorial-title");
    if (reducedMotion) title.classList.add("is-editorial-visible");
    else {
      pendingTitles.add(title);
      titleObserver.observe(title);
    }
  };
  const attachImage = (frame) => {
    if (frame.dataset.imageMotionReady) return;
    frame.dataset.imageMotionReady = "true";
    frame.classList.add("image-reveal-frame");
    const image = frame.querySelector("img");
    if (image) {
      image.classList.add("motion-parallax-image");
      parallaxFrames.add(frame);
      parallaxObserver.observe(frame);
    }
    const curtain = document.createElement("span");
    curtain.className = "image-reveal-curtain";
    curtain.setAttribute("aria-hidden", "true");
    frame.appendChild(curtain);
    if (reducedMotion) frame.classList.add("is-image-revealed");
    else {
      pendingImages.add(frame);
      imageObserver.observe(frame);
    }
  };
  const attachCopy = (element, index) => {
    if (element.dataset.motionCopyReady) return;
    element.dataset.motionCopyReady = "true";
    element.classList.add("motion-copy");
    element.style.setProperty("--copy-delay", `${140 + Math.min(index, 8) * 90}ms`);
    if (reducedMotion) element.classList.add("is-motion-copy-visible");
    else {
      pendingCopies.add(element);
      copyObserver.observe(element);
    }
  };

  const scan = (root = document) => {
    titleSelectors.forEach((selector) => {
      if (root instanceof Element && root.matches(selector)) attachTitle(root);
      root.querySelectorAll(selector).forEach(attachTitle);
    });
    copySelectors.forEach((selector) => {
      const matches = [];
      if (root instanceof Element && root.matches(selector)) matches.push(root);
      matches.push(...root.querySelectorAll(selector));
      matches.forEach(attachCopy);
    });
    imageSelectors.forEach((selector) => {
      if (root instanceof Element && root.matches(selector)) attachImage(root);
      root.querySelectorAll(selector).forEach(attachImage);
    });
  };

  const revealVisibleMotion = () => {
    if (reducedMotion) return;
    pendingTitles.forEach((element) => {
      if (!element.isConnected || element.classList.contains("is-editorial-visible")) {
        pendingTitles.delete(element);
        titleObserver.unobserve(element);
        return;
      }
      const rect = element.getBoundingClientRect();
      if (rect.top < window.innerHeight * 0.92 && rect.bottom > 0) {
        element.classList.add("is-editorial-visible");
        pendingTitles.delete(element);
        titleObserver.unobserve(element);
      }
    });
    pendingCopies.forEach((element) => {
      if (!element.isConnected || element.classList.contains("is-motion-copy-visible")) {
        pendingCopies.delete(element);
        copyObserver.unobserve(element);
        return;
      }
      const rect = element.getBoundingClientRect();
      if (rect.top < window.innerHeight * 0.94 && rect.bottom > 0) {
        element.classList.add("is-motion-copy-visible");
        pendingCopies.delete(element);
        copyObserver.unobserve(element);
      }
    });
    pendingImages.forEach((element) => {
      if (!element.isConnected || element.classList.contains("is-image-revealed")) {
        pendingImages.delete(element);
        imageObserver.unobserve(element);
        return;
      }
      const rect = element.getBoundingClientRect();
      if (rect.top < window.innerHeight * 0.96 && rect.bottom > 0) {
        element.classList.add("is-image-revealed");
        pendingImages.delete(element);
        imageObserver.unobserve(element);
      }
    });
  };

  let frameRequested = false;
  const updateParallax = () => {
    frameRequested = false;
    if (reducedMotion) return;
    const viewportCenter = window.innerHeight * 0.5;
    activeParallaxFrames.forEach((frame) => {
      if (!frame.isConnected) {
        activeParallaxFrames.delete(frame);
        parallaxFrames.delete(frame);
        parallaxObserver.unobserve(frame);
        return;
      }
      const rect = frame.getBoundingClientRect();
      if (rect.bottom < -80 || rect.top > window.innerHeight + 80) return;
      const distance = rect.top + rect.height * 0.5 - viewportCenter;
      const offset = Math.max(-28, Math.min(28, distance * -0.032));
      frame.style.setProperty("--parallax-y", `${offset.toFixed(2)}px`);
    });
  };
  const requestParallax = () => {
    if (frameRequested) return;
    frameRequested = true;
    requestAnimationFrame(updateParallax);
  };

  scan();
  document.addEventListener("scroll", requestParallax, { capture: true, passive: true });
  window.addEventListener("resize", requestParallax);
  const mutationObserver = new MutationObserver((mutations) => {
    mutations.forEach((mutation) => {
      mutation.addedNodes.forEach((node) => {
        if (node instanceof Element) scan(node);
      });
    });
    requestParallax();
  });
  mutationObserver.observe(modalContent, { childList: true, subtree: true });
  requestParallax();
  return true;
}

function initAnimatedWorkList() {
  if (!workGrid) return;
  workGrid.classList.add("animated-work-list");
  workGrid.setAttribute("role", "listbox");
  workGrid.setAttribute("aria-label", "Selected Works");
  workGrid.tabIndex = 0;
  let selectedIndex = -1;

  const cards = () => [...workGrid.querySelectorAll(".project-card")];
  const select = (index, shouldScroll = false) => {
    const items = cards();
    if (!items.length) return;
    selectedIndex = Math.max(0, Math.min(index, items.length - 1));
    items.forEach((item, itemIndex) => {
      const selected = itemIndex === selectedIndex;
      item.classList.toggle("is-list-selected", selected);
      item.setAttribute("aria-selected", String(selected));
    });
    if (shouldScroll) items[selectedIndex].scrollIntoView({ block: "center", behavior: "smooth" });
  };

  cards().forEach((card, index) => {
    card.setAttribute("role", "option");
    card.style.setProperty("--list-index", index);
    card.addEventListener("pointerenter", () => select(index));
    card.addEventListener("focus", () => select(index));
  });

  workGrid.addEventListener("keydown", (event) => {
    if (!["ArrowDown", "ArrowRight", "ArrowUp", "ArrowLeft", "Enter"].includes(event.key)) return;
    event.preventDefault();
    if (event.key === "Enter" && selectedIndex >= 0) {
      cards()[selectedIndex]?.click();
      return;
    }
    const direction = event.key === "ArrowDown" || event.key === "ArrowRight" ? 1 : -1;
    select(selectedIndex < 0 ? 0 : selectedIndex + direction, true);
  });

  workGrid.addEventListener("pointerleave", () => {
    cards().forEach((card) => {
      card.classList.remove("is-list-selected");
      card.setAttribute("aria-selected", "false");
    });
    selectedIndex = -1;
  });
}

function closeProject() {
  activeVideoObserver?.disconnect();
  activeVideoObserver = null;
  closeMediaLightbox();
  modal.classList.remove("is-open");
  modal.setAttribute("aria-hidden", "true");
  document.body.classList.remove("modal-open");
  document.dispatchEvent(new CustomEvent("portfolio:modal", { detail: { open: false } }));
  modalContent.classList.remove("is-copy-hidden");
  modalContent.innerHTML = "";
}

function initHeroVideoVisibility() {
  const hero = document.querySelector(".hero");
  const video = hero?.querySelector(".hero-background-video");
  if (!hero || !video) return;

  let heroVisible = true;
  let modalOpen = false;
  const syncPlayback = () => {
    if (heroVisible && !document.hidden && !modalOpen) video.play().catch(() => {});
    else video.pause();
  };

  new IntersectionObserver(
    ([entry]) => {
      heroVisible = entry.isIntersecting;
      syncPlayback();
    },
    { threshold: 0.04 },
  ).observe(hero);
  document.addEventListener("visibilitychange", syncPlayback);
  document.addEventListener("portfolio:modal", (event) => {
    modalOpen = Boolean(event.detail?.open);
    syncPlayback();
  });
}

function openMediaLightbox(trigger) {
  if (!mediaLightbox || !lightboxImage) return;
  const sourceImage = trigger.querySelector("img");
  lastLightboxTrigger = trigger;
  lightboxImage.src = trigger.href;
  lightboxImage.alt = sourceImage?.alt || "项目图片预览";
  mediaLightbox.classList.add("is-open");
  mediaLightbox.setAttribute("aria-hidden", "false");
  document.body.classList.add("lightbox-open");
  mediaLightbox.querySelector(".media-lightbox-close")?.focus({ preventScroll: true });
}

function closeMediaLightbox() {
  if (!mediaLightbox?.classList.contains("is-open")) return;
  mediaLightbox.classList.remove("is-open");
  mediaLightbox.setAttribute("aria-hidden", "true");
  document.body.classList.remove("lightbox-open");
  lightboxImage.removeAttribute("src");
  lastLightboxTrigger?.focus({ preventScroll: true });
  lastLightboxTrigger = null;
}

function initMediaLightbox() {
  document.addEventListener("click", (event) => {
    const trigger = event.target.closest("[data-lightbox-trigger]");
    if (!trigger) return;
    event.preventDefault();
    openMediaLightbox(trigger);
  });

  document.querySelectorAll("[data-lightbox-close]").forEach((button) => {
    button.addEventListener("click", closeMediaLightbox);
  });
}

function renderChannels() {
  channelGrid.innerHTML = channels
    .map(
      (channel) => `
      <article class="channel-card">
        <div>
          <small>${channel.label}</small>
          <h3>${channel.title}</h3>
          <p>${channel.text}</p>
        </div>
        <a class="channel-video" href="${channel.caseUrl}" target="_blank" rel="noreferrer">
          <img src="${asset(channel.caseCover)}" alt="${channel.title} ${channel.caseTitle}" loading="lazy" decoding="async" fetchpriority="low" />
          <span>${channel.caseTitle}</span>
        </a>
        <a class="channel-action" href="${channel.url}" target="_blank" rel="noreferrer">
          <img class="bili-icon" src="${asset("bilibili logo.ico")}" alt="" aria-hidden="true" />
          <span>${channel.status}</span>
        </a>
      </article>
    `,
    )
    .join("");
}

function initGalaxy() {
  const canvas = document.querySelector("[data-galaxy-canvas]");
  const hero = canvas?.closest(".hero");
  if (!canvas || !hero) return;

  const ctx = canvas.getContext("2d");
  if (!ctx) return;

  const reducedMotion = runtimeProfile.reducedMotion;
  const galaxy = {
    density: 1,
    glowIntensity: 0.3,
    saturation: 0,
    hueShift: 140,
    twinkleIntensity: 0.3,
    rotationSpeed: 0.1,
    repulsionStrength: 2,
    autoCenterRepulsion: 0,
    starSpeed: 0.5,
    speed: 1,
  };
  const mouse = { x: 0.5, y: 0.5, active: 0 };
  let width = 0;
  let height = 0;
  let stars = [];
  let heroVisible = true;
  let pageVisible = !document.hidden;
  let modalOpen = false;
  let lastFrame = 0;
  let animationFrame = 0;
  canvas.dataset.renderState = "active";
  canvas.dataset.fpsTarget = String(runtimeProfile.targetFps);

  const createStar = () => ({
    angle: Math.random() * Math.PI * 2,
    distance: Math.sqrt(Math.random()) * Math.max(width, height) * 0.68,
    radius: Math.random() * 1.15 + 0.35,
    depth: Math.random(),
    layer: Math.random() * 4,
    orbit: (Math.random() - 0.5) * 0.7,
    twinkle: Math.random() * Math.PI * 2,
  });

  const resize = () => {
    const rect = canvas.getBoundingClientRect();
    const dpr = Math.min(window.devicePixelRatio || 1, runtimeProfile.galaxyDpr);
    width = Math.max(1, rect.width);
    height = Math.max(1, rect.height);
    canvas.width = Math.floor(width * dpr);
    canvas.height = Math.floor(height * dpr);
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

    const maxStars = runtimeProfile.lowPower ? 110 : 180;
    const minStars = runtimeProfile.lowPower ? 64 : 96;
    const starCount = Math.round(Math.min(maxStars, Math.max(minStars, ((width * height) / 11800) * galaxy.density)));
    stars = Array.from({ length: reducedMotion ? Math.round(starCount * 0.55) : starCount }, createStar);
    syncLoop();
  };

  hero.addEventListener("pointermove", (event) => {
    const rect = hero.getBoundingClientRect();
    mouse.x = (event.clientX - rect.left) / rect.width;
    mouse.y = (event.clientY - rect.top) / rect.height;
    mouse.active = 1;
  });

  hero.addEventListener("pointerleave", () => {
    mouse.active = 0;
  });

  document.addEventListener("visibilitychange", () => {
    pageVisible = !document.hidden;
    lastFrame = performance.now();
    syncLoop();
  });
  document.addEventListener("portfolio:modal", (event) => {
    modalOpen = Boolean(event.detail?.open);
    lastFrame = performance.now();
    syncLoop();
  });
  new IntersectionObserver(
    ([entry]) => {
      heroVisible = entry.isIntersecting;
      lastFrame = performance.now();
      syncLoop();
    },
    { threshold: 0.02 },
  ).observe(hero);

  const isActive = () => pageVisible && heroVisible && !modalOpen;
  const scheduleFrame = () => {
    if (!animationFrame) animationFrame = requestAnimationFrame(draw);
  };
  const syncLoop = () => {
    const active = isActive();
    canvas.dataset.renderState = active ? "active" : "paused";
    if (!active && animationFrame) {
      cancelAnimationFrame(animationFrame);
      animationFrame = 0;
    } else if (active && !animationFrame) {
      scheduleFrame();
    }
  };
  const draw = (time = 0) => {
    animationFrame = 0;
    if (!isActive()) return;
    if (!reducedMotion && time - lastFrame < 1000 / runtimeProfile.targetFps) {
      scheduleFrame();
      return;
    }
    lastFrame = time;
    ctx.clearRect(0, 0, width, height);
    const timeSeconds = time * 0.001 * galaxy.speed;
    const focalX = width * mouse.x;
    const focalY = height * mouse.y;
    const centerX = width * 0.5;
    const centerY = height * 0.5;

    for (const star of stars) {
      const depth = reducedMotion ? star.depth : (star.depth + timeSeconds * galaxy.starSpeed * 0.045) % 1;
      const scale = 0.28 + depth * 1.18;
      const rotation = reducedMotion ? star.orbit : star.orbit + timeSeconds * galaxy.rotationSpeed * (0.18 + star.layer * 0.035);
      const oval = height / Math.max(width, 1);
      let drawX = centerX + Math.cos(star.angle + rotation) * star.distance * scale;
      let drawY = centerY + Math.sin(star.angle + rotation) * star.distance * scale * oval;

      if (galaxy.autoCenterRepulsion > 0) {
        const centerDx = drawX - centerX;
        const centerDy = drawY - centerY;
        const centerDistance = Math.hypot(centerDx, centerDy) || 1;
        drawX += (centerDx / centerDistance) * galaxy.autoCenterRepulsion * 20;
        drawY += (centerDy / centerDistance) * galaxy.autoCenterRepulsion * 20;
      }

      const dx = drawX - focalX;
      const dy = drawY - focalY;
      const distance = Math.hypot(dx, dy) || 1;
      const repulseRadius = 142;
      const repulse = mouse.active * Math.max(0, (repulseRadius - distance) / repulseRadius) * galaxy.repulsionStrength;
      drawX += (dx / distance) * repulse * 26;
      drawY += (dy / distance) * repulse * 26;

      const twinkle = 1 + Math.sin(timeSeconds * 3.4 + star.twinkle) * galaxy.twinkleIntensity;
      const alpha = Math.max(0.08, (0.18 + depth * 0.58) * twinkle);
      const color =
        galaxy.saturation > 0
          ? `hsla(${galaxy.hueShift}, ${galaxy.saturation * 100}%, ${72 + depth * 18}%, ${alpha})`
          : `rgba(255, 255, 255, ${alpha})`;

      const glowColor =
        galaxy.saturation > 0
          ? `hsla(${galaxy.hueShift}, ${galaxy.saturation * 100}%, 82%, ${alpha * 0.16})`
          : `rgba(255, 255, 255, ${alpha * 0.16})`;
      ctx.beginPath();
      ctx.fillStyle = glowColor;
      ctx.arc(drawX, drawY, star.radius * (2.2 + depth * 2.4), 0, Math.PI * 2);
      ctx.fill();
      ctx.beginPath();
      ctx.fillStyle = color;
      ctx.arc(drawX, drawY, star.radius * (0.7 + depth * 1.25), 0, Math.PI * 2);
      ctx.fill();
    }
    if (!reducedMotion) scheduleFrame();
  };

  resize();
  window.addEventListener("resize", resize);
  syncLoop();
}

function initHeroTextInteraction() {
  const hero = document.querySelector(".hero");
  if (!hero || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

  let pointerFrame = 0;
  let latestEvent = null;
  hero.addEventListener("pointermove", (event) => {
    latestEvent = event;
    if (pointerFrame) return;
    pointerFrame = requestAnimationFrame(() => {
      pointerFrame = 0;
      const event = latestEvent;
      if (!event) return;
    const rect = hero.getBoundingClientRect();
    const x = (event.clientX - rect.left) / rect.width - 0.5;
    const y = (event.clientY - rect.top) / rect.height - 0.5;
    hero.style.setProperty("--hero-shift-x", `${(x * 12).toFixed(2)}px`);
    hero.style.setProperty("--hero-shift-y", `${(y * 8).toFixed(2)}px`);
    hero.style.setProperty("--meta-shift-x", `${(x * -6).toFixed(2)}px`);
    });
  });

  hero.addEventListener("pointerleave", () => {
    hero.style.setProperty("--hero-shift-x", "0px");
    hero.style.setProperty("--hero-shift-y", "0px");
    hero.style.setProperty("--meta-shift-x", "0px");
  });
}

function initHeroTextType() {
  const target = document.querySelector("[data-text-type]");
  if (!target) return;

  const text = target.dataset.textType || "";
  const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  if (reducedMotion) {
    target.textContent = text;
    return;
  }

  target.setAttribute("aria-label", text);
  target.textContent = "";
  const content = document.createElement("span");
  content.className = "text-type-content";
  const cursor = document.createElement("span");
  cursor.className = "text-type-cursor";
  cursor.setAttribute("aria-hidden", "true");
  cursor.textContent = "|";
  target.append(content, cursor);

  let index = 0;
  const typeNext = () => {
    if (index >= text.length) {
      target.classList.add("is-typed");
      return;
    }

    content.textContent += text[index];
    index += 1;
    window.setTimeout(typeNext, 26 + Math.random() * 34);
  };

  window.setTimeout(typeNext, 1450);
}

function initBorderGlow() {
  const selectors = [
    ".site-nav",
    ".hero-interface",
    ".project-card",
    ".platform-card",
    ".about-portrait",
    ".service-grid > *",
    ".channel-card",
    ".channel-video",
    ".channel-action",
    ".contact-link",
    ".media-tile",
    ".sticker-image-link",
    ".modal-meta span",
    ".icon-button",
  ];

  const attach = (element) => {
    if (element.dataset.borderGlowReady) return;
    element.dataset.borderGlowReady = "true";
    element.classList.add("border-glow");

    let pointerFrame = 0;
    let latestEvent = null;
    let rect = null;
    element.addEventListener("pointerenter", () => {
      rect = element.getBoundingClientRect();
    });
    element.addEventListener("pointermove", (event) => {
      latestEvent = event;
      if (pointerFrame) return;
      pointerFrame = requestAnimationFrame(() => {
        pointerFrame = 0;
        if (!latestEvent) return;
        rect ||= element.getBoundingClientRect();
        const x = ((latestEvent.clientX - rect.left) / rect.width) * 100;
        const y = ((latestEvent.clientY - rect.top) / rect.height) * 100;
        element.style.setProperty("--glow-x", `${x.toFixed(2)}%`);
        element.style.setProperty("--glow-y", `${y.toFixed(2)}%`);
        element.style.setProperty("--glow-opacity", "1");
      });
    });

    element.addEventListener("pointerleave", () => {
      rect = null;
      element.style.setProperty("--glow-opacity", "0");
    });
  };

  const scan = (root = document) => {
    selectors.forEach((selector) => root.querySelectorAll(selector).forEach(attach));
  };

  scan();
  const observer = new MutationObserver((mutations) => {
    mutations.forEach((mutation) => {
      mutation.addedNodes.forEach((node) => {
        if (!(node instanceof Element)) return;
        selectors.forEach((selector) => {
          if (node.matches(selector)) attach(node);
        });
        scan(node);
      });
    });
  });
  observer.observe(modalContent, { childList: true, subtree: true });
}

function forceRevealAll() {
  document.documentElement.classList.add("motion-fallback-complete");
  document.querySelectorAll(".reveal").forEach((element) => element.classList.add("is-visible"));
  document
    .querySelectorAll(".masonry-frame")
    .forEach((element) => element.classList.add("is-masonry-visible"));
  document
    .querySelectorAll(".editorial-title")
    .forEach((element) => element.classList.add("is-editorial-visible"));
  document
    .querySelectorAll(".motion-copy")
    .forEach((element) => element.classList.add("is-motion-copy-visible"));
  document
    .querySelectorAll(".image-reveal-frame")
    .forEach((element) => element.classList.add("is-image-revealed"));

  const opening = document.querySelector(".hero-opening");
  if (opening) opening.style.display = "none";
}

function observeReveal() {
  const items = [...document.querySelectorAll(".reveal:not(.is-observed)")];
  if (!items.length) return true;
  if (!("IntersectionObserver" in window)) {
    items.forEach((item) => item.classList.add("is-visible"));
    return false;
  }

  try {
    let callbackReceived = false;
    const observer = new IntersectionObserver(
      (entries) => {
        callbackReceived = true;
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        });
      },
      { threshold: 0.14, rootMargin: "0px 0px -2%" },
    );

    items.forEach((item) => {
      item.classList.add("is-observed");
      observer.observe(item);
    });

    window.setTimeout(() => {
      if (!callbackReceived) items.forEach((item) => item.classList.add("is-visible"));
    }, 1200);
    return true;
  } catch (error) {
    console.warn("[portfolio] reveal observer unavailable", error);
    items.forEach((item) => item.classList.add("is-visible"));
    return false;
  }
}

function safeInitialize(name, initializer, fallback) {
  try {
    return initializer() !== false;
  } catch (error) {
    console.warn(`[portfolio] ${name} initialization failed`, error);
    fallback?.();
    return false;
  }
}

document.querySelectorAll("[data-close-modal]").forEach((button) => {
  button.addEventListener("click", closeProject);
});

document.addEventListener("keydown", (event) => {
  if (event.key !== "Escape") return;
  if (mediaLightbox?.classList.contains("is-open")) {
    closeMediaLightbox();
    return;
  }
  if (modal.classList.contains("is-open")) closeProject();
});

const siteHeader = document.querySelector("[data-header]");
let headerFrameRequested = false;
window.addEventListener(
  "scroll",
  () => {
    if (headerFrameRequested) return;
    headerFrameRequested = true;
    requestAnimationFrame(() => {
      siteHeader.classList.toggle("is-scrolled", window.scrollY > 16);
      headerFrameRequested = false;
    });
  },
  { passive: true },
);

safeInitialize("projects", renderProjects, forceRevealAll);
safeInitialize("channels", renderChannels, forceRevealAll);
safeInitialize("plasma background", initPlasmaBackground);
safeInitialize("galaxy", initGalaxy);
safeInitialize("hero video", initHeroVideoVisibility);
safeInitialize("hero interaction", initHeroTextInteraction);
safeInitialize("hero text", initHeroTextType);
safeInitialize("border glow", initBorderGlow);
safeInitialize("work list", initAnimatedWorkList);

const masonryReady = safeInitialize("masonry motion", initMasonryFrames, forceRevealAll);
const editorialReady = safeInitialize("editorial motion", initEditorialMotion, forceRevealAll);
safeInitialize("media lightbox", initMediaLightbox);
const revealReady = safeInitialize("reveal motion", observeReveal, forceRevealAll);

if (masonryReady && editorialReady && revealReady) {
  document.documentElement.classList.add("motion-ready");
} else {
  forceRevealAll();
}

const scheduleRevealFallback = (delay = 2000) => window.setTimeout(forceRevealAll, delay);
scheduleRevealFallback();
if (document.readyState !== "complete") {
  window.addEventListener("load", () => scheduleRevealFallback(), { once: true });
}

window.addEventListener("pageshow", (event) => {
  if (event.persisted) scheduleRevealFallback(250);
});
document.addEventListener("visibilitychange", () => {
  if (!document.hidden) scheduleRevealFallback(250);
});
