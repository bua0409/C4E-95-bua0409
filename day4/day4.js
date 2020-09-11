// let preson = {
//     name:'Bua'
// }

// for (let i = 0; i < 5; i++) {
//     fd(100)
//     rt(144)
//     fd(100)
//     rt(144)
// }

sort = [1, 5, 3, 7, 4, 9];
for (let i = 0; i < sort.length; i++) {
  for (let j = 0; j < i + 1; j++) {
    if (sort[j] > sort[j + 1]) {
      [sort[j], sort[j + 1]] = [sort[j + 1], sort[j]];
    }
  }
}
for (const iterator of object) {
}
for (const iterator of object) {
}

let DEV_DICTION = {
  debug:
    "the process of figuring out why program has a certain error and how to fix it",
  done:
    "when your task is complete, the only thing you have to do is to wait for users to use it (no additional codes or actions needed)",
  detect: "the formal word for ‘error’",
  pm:
    "the short version  of Project Manager, the person in charge of the final result of a project",
};
let keyword = prompt("Enter a keyword");
console.log(typeof keyword);
let sort = [];
bool = false;
sort = Object.getOwnPropertyNames(DEV_DICTION).sort();
for (let i = 0; i < sort.length; i++) {
  if (!keyword === sort[i]) {
    bool = true;
  }
}
if (bool == true) {
  console.log(DEV_DICTION[keyword]);
}
if (bool == false) {
  alert("Try again");
  let diferrentKeyword = "";
  let check = true;
  while (check) {
    check = true;
    diferrentKeyword = prompt("Try again:");

    for (let j = 0; j < sort.length; j++) {
      if (diferrentKeyword == sort[j]) {
        console.log(DEV_DICTION[diferrentKeyword]);
        check = false;
      }
    }
  }
}
let myProducts = [
    {
      name: "Xiaomi portable charger 20000mah",
      brand: "Xiaomi",
      price: 428,
      color: "White",
      category: "Charger",
    },
    {
      name: "VSmart Active 1",
      brand: "VSmart",
      price: 5487,
      color: "Black",
      category: "Phone",
    },
    {
      name: "IPhone X",
      brand: "Apple",
      price: 21490,
      color: "Gray",
      category: "Phone",
    },
    {
      name: "Samsung Galaxy A9",
      brand: "Samsung",
      price: 8490,
      color: "Blue",
      category: "Phone",
    },
  ];
  
  {
    for (let i = 0; i < myProducts.length; i++) {
      let { name, price } = myProducts[i];
      console.log(`Name: ${name}`);
      console.log(`Price: ${price}`);
    }
  }

  {
    for (let i = 0; i < myProducts.length; i++) {
      let { name, price } = myProducts[i],
        position = i + 1;
      console.log(`#${position}. ${name}`);
      console.log(`    Price: ${price}`);
    }
    while (true) {
      const inputPosition = Number(prompt("Enter a product position"));
      if (inputPosition <= myProducts.length && inputPosition > 0) {
        let index = inputPosition - 1,
          product = myProducts[index];
        console.clear();
        for (const property in product) {
          console.log(`${property}: ${product[property]}`);
        }
        break;
      } else {
        alert(`Product at position ${inputPosition} doesn't exist!`);
      }
    }
  }
  
  {
    let check;
    while (true) {
      const inputCategory = prompt("Enter a category:").toLowerCase();
      check = false;
      for (let i = 0; i < myProducts.length; i++) {
        let { name, price, category } = myProducts[i];
        if (inputCategory === category.toLowerCase()) {
          console.log("--------------------------------------");
          console.log(`Name: ${name}`);
          console.log(`Price: ${price}`);
          check = true;
        }
      }
      if (check === false) {
        alert("Category doesn't exist!");
      } else {
        break;
      }
    }
  }
  
  myProducts[0].providers = ["Phukienzero", "Dientuccc"];
  myProducts[1].providers = ["Tgdd", "Ddghn", "VhStore"];
  myProducts[2].providers = ["Tgdd"];
  myProducts[3].providers = ["Tgdd"];
  {
    for (let i = 0; i <myProducts.length; i++) {
      let { name, price, providers } = myProducts[i],
        position = i + 1;
      console.log(`#${position}. ${name}`);
      console.log(`    Price: ${price}`);
      console.log("    Providers:", ...providers);
    }
  }
  
  //5.5
  {
    let check;
    while (true) {
      const inputProvider = prompt("Enter a provider:").toLowerCase();
      check = false;
      for (let i = 0; i < myProducts.length; i++) {
        let product = myProducts[i],
          { name, brand, price, color, category, providers } = product;
        for (let j = 0; j < providers.length; j++) {
          let indexProvider = providers[j].toLowerCase().indexOf(inputProvider);
          if (indexProvider !== -1) {
             console.log(`Name: ${name}`);
             console.log(`Brand: ${brand}`);
             console.log(`Price: ${price}`);
             console.log(`Color: ${color}`);
             console.log(`Category: ${category}`);
             console.log(`Providers: ${providers}`);
            for (const property in product) {
              console.log(`${property}: ${product[property]}`);
              check = true;
            }
          }
        }
      }
      if (check === false) {
        alert("Can't find provider!");
      } else {
        break;
      }
    }
  }
  
    const TASKS = [
    { task: "HTML", completion: false },
    { task: "CSS", completion: false },
    { task: "Basics of JS", completion: false },
    { task: "Node Package Manager (npm)", completion: false },
    { task: "Git", completion: false },
  ];
  // 6.1 Log tasks
  console.log("This is your learning task to front-end developer career:");
  for (let i = 0; i < TASKS.length; i++) {
    let { task, completion } = TASKS[i],
      position = i + 1;
    console.log(`${position}. ${task}`);
    console.log(`   Complete: ${completion}`);
  }
  console.log("---------------------------------------------------------");
  while (true) {
    const userPrompt = prompt(
      "What do you want to do (Read, New, Update, Complete, Delete, Quit)"
    ).toLowerCase();
    if (userPrompt === "quit") {
      break;
    } else {
      switch (userPrompt) {
        default:
          alert("Invalid command, please enter again!");
          break;
        case "new": // 6.2 Add new task
          const newTask = prompt("Add new task:");
          TASKS.push({ task: newTask, completion: false });
          alert("New task added.");
          break;
        case "update": // 6.3 Update task
          const updatePosition = Number(prompt("Enter position to update:")),
            i = updatePosition - 1,
            updateTask = prompt("New title:");
          TASKS[i].task = updateTask;
          alert(`Task #${updatePosition} updated.`);
          break;
        case "complete": // 6.4 Complete task
          const completePosition = Number(
              prompt("Enter position of task to complete:")
            ),
            j = completePosition - 1;
          TASKS[j].completion = true;
          alert(`Task #${completePosition} completed.`);
          break;
        case "delete": // 6.5 Delete task
          const deletePosition = Number(prompt("Enter position to delete")),
            k = deletePosition - 1;
          TASKS.splice(k, 1);
          alert(`Task #${deletePosition} deleted.`);
          break;
        case "read": // 6.6 Better logging
          console.clear();
          for (let i = 0; i < TASKS.length; i++) {
            let { task, completion } = TASKS[i],
              position = i + 1,
              completed = "[ ]";
            if (completion === true) {
              completed = "[X]";
            }
            console.log(`${position}. ${completed} ${task}`);
          }
      }
    }
  }
  

  const pos = {
    x: 200,
    y: 50,
  };
  penup();
  rt(90);
  fd(pos.x);
  lt(90);
  fd(pos.y);
  pendown();
  
  const square = {
    x: 100,
    y: 50,
    width: 20,
  };
  penup();
  rt(90);
  fd(square.x);
  lt(90);
  fd(square.y);
  pendown();
  for (let i = 0; i < 4; i++) {
    fd(square.width);
    rt(90);
  }
  
    const rect = {
    x: 100,
    y: 50,
    width: 20,
    height: 40,
  };
  penup();
  rt(90);
  fd(rect.x);
  lt(90);
  fd(rect.y);
  pendown();
  for (let i = 0; i < 2; i++) {
    fd(rect.height);
    rt(90);
    fd(rect.width);
    rt(90);
  }
  

  const CMDS = [
    { shape: "square", x: 20, y: 40, width: 50 },
    { shape: "rect", x: 8, y: 70, width: 12, height: 40 },
    { shape: "rect", x: 70, y: 70, width: 12, height: 40 },
    { shape: "rect", x: 10, y: 20, width: 70, height: 20 },
    { shape: "square", x: 25, y: 40, width: 14 },
    { shape: "square", x: 33, y: 42, width: 6 },
    { shape: "square", x: 50, y: 40, width: 14 },
    { shape: "square", x: 58, y: 42, width: 6 },
    { shape: "square", x: 40, y: 25, width: 8 },
    { shape: "square", penWidth: 1, x: 500, y: 500, width: 15 },
  ];
  for (let i = 0; i < CMDS.length; i++) {
    let { shape, x, y, width, height } = CMDS[i];
    home();
    switch (shape) {
      case "square":
        penup();
        rt(90);
        fd(x);
        lt(90);
        fd(y);
        pendown();
        for (let i = 0; i < 4; i++) {
          fd(width);
          rt(90);
        }
        break;
      case "rect":
        penup();
        rt(90);
        fd(x);
        lt(90);
        fd(y);
        pendown();
        for (let i = 0; i < 2; i++) {
          fd(height);
          rt(90);
          fd(width);
          rt(90);
        }
        break;
    }
  }
  
  
  
  const CMDS = [
    { shape: "circle", x: 0, y: -20, radius: 60 },
    { shape: "circle", x: 0, y: 80, radius: 40 },
    { shape: "circle", x: -75, y: 10, radius: 20 },
    { shape: "circle", x: 75, y: 10, radius: 20 },
    { shape: "square", x: -65, y: -100, width: 30 },
    { shape: "square", x: 38, y: -100, width: 30 },
    { shape: "rect", x: -30, y: 80, width: 20, height: 4 },
    { shape: "rect", x: 10, y: 80, width: 20, height: 4 },
    { shape: "rect", x: -10, y: 50, width: 20, height: 6 },
    { shape: "square", x: 500, y: 500, width: 20 },
  ];
  for (let i = 0; i < CMDS.length; i++) {
    let { shape, x, y, width, height, radius } = CMDS[i];
    home();
    switch (shape) {
      case "square":
        penup();
        rt(90);
        fd(x);
        lt(90);
        fd(y);
        pendown();
        for (let i = 0; i < 4; i++) {
          fd(width);
          rt(90);
        }
        break;
      case "rect":
        penup();
        rt(90);
        fd(x);
        lt(90);
        fd(y);
        pendown();
        for (let i = 0; i < 2; i++) {
          fd(height);
          rt(90);
          fd(width);
          rt(90);
        }
        break;
      case "circle":
        penup();
        rt(90);
        fd(x);
        lt(90);
        fd(y);
        pendown();
        for (let i = 0; i < 360; i++) {
          fd(radius / 57);
          rt(1);
        }
        break;
    }
  }
  
  const jobData =
    "https://gist.githubusercontent.com/qhuydtvt/6870e14e544455f6de6081a83e365b5b/raw/adb147e19259e3ee9b093cb71228026e2417ab09/jobs.js";
  
    {
        hits: [
            {
                benefits: [
                    {
                        benefitIconName: 'fa-dollar',
                        benefitName: 'Bonus',
                        benefitValue: '14 tháng lương, đánh giá tăng lương 2 lần/ năm',
                        benefitId: 1
                    },
                    {
                        benefitIconName: 'fa-user-md',
                        benefitName: 'Healthcare Plan',
                        benefitValue: 'Hưởng đầy đủ các loại bảo hiểm theo quy định của nhà nước, các trợ cấp theo quy định của công ty',
                        benefitId: 2
                    },
                    {
                        benefitIconName: 'fa-file-image-o',
                        benefitName: 'Paid Leave',
                        benefitValue: 'Có cơ hội học hỏi nâng cao kiến thức chuyên môn và cơ hội thăng tiến',
                        benefitId: 3
                    }
                ],
                expiredDate: 1572713999,
                classifiedConfidenceRoles: [
                    0.478965416077008,
                    0.461663685615174
                ],
                visibilityDisplay: 1,
                jobTitle: '02 JAVA Web Developer (Hà Nội)',
                categoryVIs: [
                    'Công nghệ cao',
                    'IT - Phần mềm',
                    'Internet/Online Media'
                ],
                priorityOrder: 1570593423,
                salaryMax: 1000,
                skills: [
                    'Hibernate',
                    'Spring MVC',
                    'JavaScript',
                    'Struts',
                    'Spring Boots'
                ],
                isSalaryVisible: true,
                isShowLogoInSearchResult: true,
                jobLevelVI: 'Nhân viên',
                isShowLogo: true,
                isPriorityJob: false,
                isShowLogoInSearchResult66: true,
                alias: '02-java-web-developer-ha-noi-1-1-1-1',
                company: 'Yumeshin Vietnam',
                categories: [
                    'Internet/Online Media',
                    'High Technology',
                    'IT - Software'
                ],
                salaryMin: 500,
                timestamp: '20191009111048',
                priorityOrder35: 1570593423,
                priorityOrder57: 1570593423,
                locationVIs: [
                    'Hà Nội'
                ],
                classifiedRoles: [
                    'Developer',
                    'Backend Developer'
                ],
                jobSalary: 1000,
                companyLogo: 'https://images.vietnamworks.com/pictureofcompany/8c/10756982.png',
                locationIds: [
                    24
                ],
                jobLevelId: 5,
                userId: 5531713,
                jobLevel: 'Experienced (non-manager)',
                onlineDate: 1570593423,
                jobId: 1170673,
                companyId: 298378,
                categoryIds: [
                    66,
                    35,
                    57
                ],
                classifiedConfidenceSkills: [
                    0.955278194281585,
                    0.0277846614949552
                ],
                priorityOrder66: 1570593423,
                locations: [
                    'Ha Noi'
                ],
                jobDescription: '- Triển khai các ứng dụng trên nền tảng Java theo yêu cầu của khách hàng;\n- Tham gia vào quá trình phân tích, thiết kế, phát triển và bảo trì hệ thống;\n- Trực tiếp viết mã nguồn và thực hiện Unit test sản theo tài liệu thiết kế từ đội BA;\n- Tạo thiết kế chi tiết và viết các tài liệu kỹ thuật khi được yêu cầu;\n- Xác định mục tiêu và giải pháp thông qua việc phân tích yêu cầu người dùng, hình dung các tính năng và chức năng của hệ thống;\n- Tham gia vào các hoạt động review tài liệu thiết kế cũng như mã nguồn;',
                isShowLogoInSearchResult35: true,
                isShowLogoInSearchResult57: true,
                publishedDate: 1570075024,
                isPremium: false,
                classifiedSkills: [
                    'Web Design',
                    'HTML/CSS'
                ],
                jobRequirement: '- Có ít nhất 1 năm kinh nghiệm trong lĩnh vực phát triển phần mềm với ngôn ngữ Java;\n- Nắm vững về phương pháp lập trình hướng đối tượng (OOP); có hiểu biết về Clean Code rules và Design Pattern;\n- Hiểu biết về UML;\n- Có kinh nghiệm làm việc với các framework của Java như Spring MVC, Spring Boots, Struts, Hibernate, JSF\n- Có kinh nghiệm làm việc với 1 trong số các framework của Javascript như: AngularJS, EmberJS, BackboneJS…;\n- Có kinh nghiệm làm việc với NodeJS, Grunt, Gulp là lợi thế;\n- Có kinh nghiệm làm việc với MySQL/MariaDB, MongoDB, Redis;\n- Sử dụng Source Version Control (Github) thành thạo;\n- Khả năng giao tiếp và làm việc nhóm tốt, có khả năng đọc hiểu tài liệu tiếng Anh tốt\n- Biết tiếng Nhật là một lợi thế;\n- Tinh thần trách nhiệm cao, cẩn thận và tỉ mỉ trong công việc;\n\n\nWhat we can offer       \n- Mức lương: Mức lương hấp dẫn, phù hợp với năng lực làm việc;\n- Giờ làm việc: 8:30 ~ 17:30, 5 ngày/ tuần; nghỉ Thứ 7, CN và các ngày nghỉ lễ theo quy định; có chế độ đầy đủ khi cần phải thêm ngoài giờ (over-time)\n- Tiền thưởng: 2 lần một năm (tổng tương đương 2 tháng lương);\n- Đánh giá tăng lương: 2 lần / năm dựa trên thành tích và đóng góp của nhân viên;\n- Hưởng đầy đủ các loại bảo hiểm theo quy định của nhà nước, các trợ cấp theo quy định của công ty;\n- Được khám sức khỏe định kỳ 1 lần/ năm;\n- Hàng tháng có tổ chức team building;  \n- Có cơ hội học hỏi nâng cao kiến thức chuyên môn và cơ hội thăng tiến\n- Các lợi ích khác theo quy định của Luật Lao động Việt Nam;',
                _geoloc: {
                    lng: 105.7837524,
                    lat: 21.0168415
                },
                objectID: '1170673',
                _highlightResult: {
                    jobTitle: {
                        value: '02 JAVA <em>Web</em> <em>Developer</em> (Hà Nội)',
                        matchLevel: 'full',
                        fullyHighlighted: false,
                        matchedWords: [
                            'web',
                            'developer'
                        ]
                    },
                    skills: [
                        {
                            value: 'Hibernate',
                            matchLevel: 'none',
                            matchedWords: []
                        },
                        {
                            value: 'Spring MVC',
                            matchLevel: 'none',
                            matchedWords: []
                        },
                        {
                            value: 'JavaScript',
                            matchLevel: 'none',
                            matchedWords: []
                        },
                        {
                            value: 'Struts',
                            matchLevel: 'none',
                            matchedWords: []
                        },
                        {
                            value: 'Spring Boots',
                            matchLevel: 'none',
                            matchedWords: []
                        }
                    ],
                    company: {
                        value: 'Yumeshin Vietnam',
                        matchLevel: 'none',
                        matchedWords: []
                    },
                    jobDescription: {
                        value: '- Triển khai các ứng dụng trên nền tảng Java theo yêu cầu của khách hàng;\n- Tham gia vào quá trình phân tích, thiết kế, phát triển và bảo trì hệ thống;\n- Trực tiếp viết mã nguồn và thực hiện Unit test sản theo tài liệu thiết kế từ đội BA;\n- Tạo thiết kế chi tiết và viết các tài liệu kỹ thuật khi được yêu cầu;\n- Xác định mục tiêu và giải pháp thông qua việc phân tích yêu cầu người dùng, hình dung các tính năng và chức năng của hệ thống;\n- Tham gia vào các hoạt động review tài liệu thiết kế cũng như mã nguồn;',
                        matchLevel: 'none',
                        matchedWords: []
                    },
                    jobRequirement: {
                        value: '- Có ít nhất 1 năm kinh nghiệm trong lĩnh vực phát triển phần mềm với ngôn ngữ Java;\n- Nắm vững về phương pháp lập trình hướng đối tượng (OOP); có hiểu biết về Clean Code rules và Design Pattern;\n- Hiểu biết về UML;\n- Có kinh nghiệm làm việc với các framework của Java như Spring MVC, Spring Boots, Struts, Hibernate, JSF\n- Có kinh nghiệm làm việc với 1 trong số các framework của Javascript như: AngularJS, EmberJS, BackboneJS…;\n- Có kinh nghiệm làm việc với NodeJS, Grunt, Gulp là lợi thế;\n- Có kinh nghiệm làm việc với MySQL/MariaDB, MongoDB, Redis;\n- Sử dụng Source Version Control (Github) thành thạo;\n- Khả năng giao tiếp và làm việc nhóm tốt, có khả năng đọc hiểu tài liệu tiếng Anh tốt\n- Biết tiếng Nhật là một lợi thế;\n- Tinh thần trách nhiệm cao, cẩn thận và tỉ mỉ trong công việc;\n\n\nWhat we can offer       \n- Mức lương: Mức lương hấp dẫn, phù hợp với năng lực làm việc;\n- Giờ làm việc: 8:30 ~ 17:30, 5 ngày/ tuần; nghỉ Thứ 7, CN và các ngày nghỉ lễ theo quy định; có chế độ đầy đủ khi cần phải thêm ngoài giờ (over-time)\n- Tiền thưởng: 2 lần một năm (tổng tương đương 2 tháng lương);\n- Đánh giá tăng lương: 2 lần / năm dựa trên thành tích và đóng góp của nhân viên;\n- Hưởng đầy đủ các loại bảo hiểm theo quy định của nhà nước, các trợ cấp theo quy định của công ty;\n- Được khám sức khỏe định kỳ 1 lần/ năm;\n- Hàng tháng có tổ chức team building;  \n- Có cơ hội học hỏi nâng cao kiến thức chuyên môn và cơ hội thăng tiến\n- Các lợi ích khác theo quy định của Luật Lao động Việt Nam;',
                        matchLevel: 'none',
                        matchedWords: []
                    }
                }
            },
            {
                benefits: [
                    {
                        benefitIconName: 'fa-graduation-cap',
                        benefitName: 'Training',
                        benefitValue: 'Tham gia các khoá đào tạo Quản lý, Kỹ năng mềm',
                        benefitId: 4
                    },
                    {
                        benefitIconName: 'fa-plane',
                        benefitName: 'Travel Opportunities',
                        benefitValue: 'Company Trip hàng năm (Đã đi: Côn Đảo, Phú Quốc, Sapa,..), Khám sức khoẻ ĐK tại Victoria HealthCare',
                        benefitId: 9
                    },
                    {
                        benefitIconName: 'fa-dollar',
                        benefitName: 'Bonus',
                        benefitValue: 'Lương thưởng theo năng lực',
                        benefitId: 1
                    }
                ],
                expiredDate: 1572627599,
                classifiedConfidenceRoles: [
                    0.704634290870941,
                    0.198554087716295
                ],
                visibilityDisplay: 0,
                jobTitle: 'Android Developer (Fresher/junior & Senior)',
                categoryVIs: [
                    'IT - Phần mềm'
                ],
                priorityOrder: 1570591715,
                salaryMax: 0,
                skills: [
                    'Java',
                    'Android Ndk',
                    'Android Sdk',
                    'Web Sevice',
                    'Lập Trình Android'
                ],
                isSalaryVisible: false,
                isShowLogoInSearchResult: true,
                jobLevelVI: 'Nhân viên',
                isShowLogo: true,
                isPriorityJob: false,
                alias: 'android-developer-fresher-junior-senior-1-1-1',
                company: 'ARIS Vietnam Co., Ltd',
                categories: [
                    'IT - Software'
                ],
                salaryMin: 300,
                timestamp: '20191009102846',
                priorityOrder35: 1570591715,
                locationVIs: [
                    'Hồ Chí Minh'
                ],
                classifiedRoles: [
                    'Mobile Developer',
                    'Developer'
                ],
                jobSalary: 300,
                companyLogo: 'https://images.vietnamworks.com/pictureofcompany/40/6215187.png',
                locationIds: [
                    29
                ],
                jobLevelId: 5,
                userId: 2484337,
                jobLevel: 'Experienced (non-manager)',
                onlineDate: 1570591715,
                jobId: 1170146,
                companyId: 114113,
                categoryIds: [
                    35
                ],
                classifiedConfidenceSkills: [
                    0.955278194281585,
                    0.0277846614949552
                ],
                locations: [
                    'Ho Chi Minh'
                ],
                jobDescription: 'Chi tiết công việc trao đổi thêm khi phỏng vấn.',
                isShowLogoInSearchResult35: true,
                publishedDate: 1569986916,
                isPremium: false,
                classifiedSkills: [
                    'Web Design',
                    'HTML/CSS'
                ],
                jobRequirement: '- Tốt nghiệp các trường Đại học chuyên ngành công nghệ thông tin hoặc điện tử viễn thông.\n- Kiến thức vững về OOP, Design patterns.\n- Nắm vững ngôn ngữ lập trình Java, am hiểu về Android SDK và NDK.\n- Ưu tiên ứng viên fresher hoặc 1-2 năm kinh nghiệm phát triển ứng dụng cho nền tảng Android (đối với Senior).\n- Có kinh nghiệm làm việc với Web services (sử dụng JSON, REST, SOAP)\n- Có kinh nghiệm sử dụng ít nhất 1 hệ quản trị cơ sở dữ liệu như My SQL, SQL Server.\n- Có kinh nghiệm ít nhất 2 năm trở lên với vị trí tương đương (đối với senior).\n- Kỹ năng đọc/viết tài liệu kỹ thuật và giao tiếp tốt bằng tiếng Anh hoặc tiếng Nhật.\n- Ưu tiên ứng viên biết tiếng Nhật, đã làm việc tại Nhật hoặc có kinh nghiệm làm việc với đối tác Nhật Bản.\n- Có khả năng làm việc tự chủ và kỹ năng làm việc theo nhóm. Khả năng nắm bắt, học hỏi kỹ thuật mới nhanh.\n- Hoà đồng, sẵn sàng hợp tác cùng với mọi người để hoàn thành mục tiêu chung.\n- Siêng năng, có tinh thần cầu tiến.\n- Có tinh thần trách nhiệm cao ( với công việc, với khách hàng, với thành viên của Team và với chính mình)',
                objectID: '1170146',
                _highlightResult: {
                    jobTitle: {
                        value: 'Android <em>Developer</em> (Fresher/junior & Senior)',
                        matchLevel: 'partial',
                        fullyHighlighted: false,
                        matchedWords: [
                            'developer'
                        ]
                    },
                    skills: [
                        {
                            value: 'Java',
                            matchLevel: 'none',
                            matchedWords: []
                        },
                        {
                            value: 'Android Ndk',
                            matchLevel: 'none',
                            matchedWords: []
                        },
                        {
                            value: 'Android Sdk',
                            matchLevel: 'none',
                            matchedWords: []
                        },
                        {
                            value: '<em>Web</em> Sevice',
                            matchLevel: 'partial',
                            fullyHighlighted: false,
                            matchedWords: [
                                'web'
                            ]
                        },
                        {
                            value: 'Lập Trình Android',
                            matchLevel: 'none',
                            matchedWords: []
                        }
                    ],
                    company: {
                        value: 'ARIS Vietnam Co., Ltd',
                        matchLevel: 'none',
                        matchedWords: []
                    },
                    jobDescription: {
                        value: 'Chi tiết công việc trao đổi thêm khi phỏng vấn.',
                        matchLevel: 'none',
                        matchedWords: []
                    },
                    jobRequirement: {
                        value: '- Tốt nghiệp các trường Đại học chuyên ngành công nghệ thông tin hoặc điện tử viễn thông.\n- Kiến thức vững về OOP, Design patterns.\n- Nắm vững ngôn ngữ lập trình Java, am hiểu về Android SDK và NDK.\n- Ưu tiên ứng viên fresher hoặc 1-2 năm kinh nghiệm phát triển ứng dụng cho nền tảng Android (đối với Senior).\n- Có kinh nghiệm làm việc với <em>Web</em> services (sử dụng JSON, REST, SOAP)\n- Có kinh nghiệm sử dụng ít nhất 1 hệ quản trị cơ sở dữ liệu như My SQL, SQL Server.\n- Có kinh nghiệm ít nhất 2 năm trở lên với vị trí tương đương (đối với senior).\n- Kỹ năng đọc/viết tài liệu kỹ thuật và giao tiếp tốt bằng tiếng Anh hoặc tiếng Nhật.\n- Ưu tiên ứng viên biết tiếng Nhật, đã làm việc tại Nhật hoặc có kinh nghiệm làm việc với đối tác Nhật Bản.\n- Có khả năng làm việc tự chủ và kỹ năng làm việc theo nhóm. Khả năng nắm bắt, học hỏi kỹ thuật mới nhanh.\n- Hoà đồng, sẵn sàng hợp tác cùng với mọi người để hoàn thành mục tiêu chung.\n- Siêng năng, có tinh thần cầu tiến.\n- Có tinh thần trách nhiệm cao ( với công việc, với khách hàng, với thành viên của Team và với chính mình)',
                        matchLevel: 'partial',
                        fullyHighlighted: false,
                        matchedWords: [
                            'web'
                        ]
                    }
                }
            },
            {
                benefits: [
                    {
                        benefitIconName: 'fa-plane',
                        benefitName: 'Travel Opportunities',
                        benefitValue: 'Cơ hội On-site tại Mỹ, Nhật Bản',
                        benefitId: 9
                    },
                    {
                        benefitIconName: 'fa-glass',
                        benefitName: 'Team Activities',
                        benefitValue: 'Tham gia các kỳ nghỉ, các hoạt động tập thể của công ty như: bóng đá, cầu lông...',
                        benefitId: 10
                    }
                ],
                expiredDate: 1573059599,
                classifiedConfidenceRoles: [
                    0.625407761567872,
                    0.348106187241412
                ],
                visibilityDisplay: 1,
                jobTitle: 'Nhân Viên Lập Trình Web - Web Developer',
                categoryVIs: [
                    'IT - Phần mềm'
                ],
                priorityOrder: 1570590574,
                salaryMax: 1000,
                skills: [
                    'Docker Swarm',
                    'PHP',
                    'MVC',
                    'Nodejs'
                ],
                isSalaryVisible: false,
                isShowLogoInSearchResult: true,
                jobLevelVI: 'Nhân viên',
                isShowLogo: true,
                isPriorityJob: false,
                alias: 'nhan-vien-lap-trinh-web-web-developer-1-1',
                company: 'Công Ty TNHH Giải Pháp Tích Hợp Cad Hài Hòa',
                categories: [
                    'IT - Software'
                ],
                salaryMin: 500,
                timestamp: '20191009101153',
                priorityOrder35: 1570590574,
                locationVIs: [
                    'Hà Nội'
                ],
                classifiedRoles: [
                    'Backend Developer',
                    'Developer'
                ],
                jobSalary: 1000,
                companyLogo: 'https://images.vietnamworks.com/pictureofcompany/ca/10211305.png',
                locationIds: [
                    24
                ],
                jobLevelId: 5,
                userId: 3735175,
                jobLevel: 'Experienced (non-manager)',
                onlineDate: 1570590574,
                jobId: 1171835,
                companyId: 204566,
                categoryIds: [
                    35
                ],
                classifiedConfidenceSkills: [
                    0.955278194281585,
                    0.0277846614949552
                ],
                locations: [
                    'Ha Noi'
                ],
                jobDescription: '- Phát triển các tính năng, giải pháp phần mềm dạng Web cho lĩnh vực CAD/BIM xây dựng',
                isShowLogoInSearchResult35: true,
                publishedDate: 1570417775,
                isPremium: false,
                classifiedSkills: [
                    'Web Design',
                    'HTML/CSS'
                ],
                jobRequirement: '•\tCó kinh nghiệm lập trình các ứng dụng Web, bất cứ ngôn ngữ gì.\n•\tƯu tiên các ứng viên thạo một trong các nội dung sau:\no\tPHP\no\tNodeJs\no\tCó kinh nghiệm với MVC, OOP, thiết kế đáp ứng.\no\tCó kinh nghiệm với Bootstrap, jQuery, LESS, SCSS, Photoshop \no\tES6, VueJS, AngularJS, React.\no\tJava, C #, ASP.NET, MSSQL, NoSQL.\n•\tCó khả năng đọc tài liệu tiếng Anh chuyên ngành \n•\tCó kỹ năng làm việc theo nhóm\n•\tTinh thần trách nhiệm và năng động của tuổi trẻ, khao khát được thể hiện mình, tinh thần của 1 chiến binh sẵn sàng đương đầu mọi khó khăn thử thách, sẳn sàng chiến thắng. Sẵn sàng làm bất cứ nhiệm vụ nào được giao\n\nQuyền lợi được hưởng :\n•\tNgày nghỉ hàng tuần: chiều thứ 7, chủ nhật và các ngày lễ theo quy định.\n•\tTăng lương theo hiệu quả công tác và cam kết đầy đủ các chế độ dành cho người lao động theo như quy định pháp luật hiện hành (BHXH, BHYT, BHTN…).\n•\tLương tháng 13 + thưởng \n•\tCác chế độ phúc lợi theo quy chế của công ty\n•\tCơ hội được học hỏi, đào tạo và thăng tiến\n•\tĐược tham gia các hoạt động ngoại khóa: văn nghệ, thể thao, du lịch của Công ty',
                _geoloc: {
                    lng: 105.7824599,
                    lat: 21.030345
                },
                objectID: '1171835',
                _highlightResult: {
                    jobTitle: {
                        value: 'Nhân Viên Lập Trình <em>Web</em> - <em>Web</em> <em>Developer</em>',
                        matchLevel: 'full',
                        fullyHighlighted: false,
                        matchedWords: [
                            'web',
                            'developer'
                        ]
                    },
                    skills: [
                        {
                            value: 'Docker Swarm',
                            matchLevel: 'none',
                            matchedWords: []
                        },
                        {
                            value: 'PHP',
                            matchLevel: 'none',
                            matchedWords: []
                        },
                        {
                            value: 'MVC',
                            matchLevel: 'none',
                            matchedWords: []
                        },
                        {
                            value: 'Nodejs',
                            matchLevel: 'none',
                            matchedWords: []
                        }
                    ],
                    company: {
                        value: 'Công Ty TNHH Giải Pháp Tích Hợp Cad Hài Hòa',
                        matchLevel: 'none',
                        matchedWords: []
                    },
                    jobDescription: {
                        value: '- Phát triển các tính năng, giải pháp phần mềm dạng <em>Web</em> cho lĩnh vực CAD/BIM xây dựng',
                        matchLevel: 'partial',
                        fullyHighlighted: false,
                        matchedWords: [
                            'web'
                        ]
                    },
                    jobRequirement: {
                        value: '•\tCó kinh nghiệm lập trình các ứng dụng <em>Web</em>, bất cứ ngôn ngữ gì.\n•\tƯu tiên các ứng viên thạo một trong các nội dung sau:\no\tPHP\no\tNodeJs\no\tCó kinh nghiệm với MVC, OOP, thiết kế đáp ứng.\no\tCó kinh nghiệm với Bootstrap, jQuery, LESS, SCSS, Photoshop \no\tES6, VueJS, AngularJS, React.\no\tJava, C #, ASP.NET, MSSQL, NoSQL.\n•\tCó khả năng đọc tài liệu tiếng Anh chuyên ngành \n•\tCó kỹ năng làm việc theo nhóm\n•\tTinh thần trách nhiệm và năng động của tuổi trẻ, khao khát được thể hiện mình, tinh thần của 1 chiến binh sẵn sàng đương đầu mọi khó khăn thử thách, sẳn sàng chiến thắng. Sẵn sàng làm bất cứ nhiệm vụ nào được giao\n\nQuyền lợi được hưởng :\n•\tNgày nghỉ hàng tuần: chiều thứ 7, chủ nhật và các ngày lễ theo quy định.\n•\tTăng lương theo hiệu quả công tác và cam kết đầy đủ các chế độ dành cho người lao động theo như quy định pháp luật hiện hành (BHXH, BHYT, BHTN…).\n•\tLương tháng 13 + thưởng \n•\tCác chế độ phúc lợi theo quy chế của công ty\n•\tCơ hội được học hỏi, đào tạo và thăng tiến\n•\tĐược tham gia các hoạt động ngoại khóa: văn nghệ, thể thao, du lịch của Công ty',
                        matchLevel: 'partial',
                        fullyHighlighted: false,
                        matchedWords: [
                            'web'
                        ]
                    }
                }
            },
            {
                benefits: [
                    {
                        benefitIconName: 'fa-graduation-cap',
                        benefitName: 'Training',
                        benefitValue: 'Continuous learning and career growth',
                        benefitId: 4
                    },
                    {
                        benefitIconName: 'fa-trophy',
                        benefitName: 'Awards',
                        benefitValue: 'Exciting challenges and rewarding recognitions',
                        benefitId: 5
                    },
                    {
                        benefitIconName: 'fa-dollar',
                        benefitName: 'Bonus',
                        benefitValue: 'Creative workplace with international teams of talents',
                        benefitId: 1
                    }
                ],
                expiredDate: 1571331599,
                classifiedConfidenceRoles: [
                    0.495064760020936,
                    0.376693534151077
                ],
                visibilityDisplay: 0,
                jobTitle: 'Senior Front-End Developer',
                categoryVIs: [
                    'IT - Phần mềm'
                ],
                priorityOrder: 1570590355,
                salaryMax: 0,
                skills: [
                    'Software Engineering',
                    'HTML5',
                    'Front-End',
                    'Web Development',
                    'Angular'
                ],
                isSalaryVisible: false,
                isShowLogoInSearchResult: true,
                jobLevelVI: 'Nhân viên',
                isShowLogo: true,
                isPriorityJob: false,
                alias: 'senior-front-end-developer-109',
                company: 'Gameloft',
                categories: [
                    'IT - Software'
                ],
                salaryMin: 300,
                timestamp: '20191009101055',
                priorityOrder35: 1570590355,
                locationVIs: [
                    'Hồ Chí Minh'
                ],
                classifiedRoles: [
                    'Frontend Developer',
                    'Developer'
                ],
                jobSalary: 300,
                companyLogo: 'https://images.vietnamworks.com/pictureofcompany/e0/4079410.png',
                locationIds: [
                    29
                ],
                jobLevelId: 5,
                userId: 407579,
                jobLevel: 'Experienced (non-manager)',
                onlineDate: 1570590355,
                jobId: 1162710,
                companyId: 1706,
                categoryIds: [
                    35
                ],
                classifiedConfidenceSkills: [
                    0.525817725191519,
                    0.168757187821785
                ],
                locations: [
                    'Ho Chi Minh'
                ],
                jobDescription: '*Job Purpose:\t\t\r\nThe Global Web Marketing team has an exciting opportunity for a Front-End Developer to join our team of developers; working on creating best-in-class web-based products supporting the company’s marketing efforts (consumer and corporate sites, customer care, forum, game sites, campaign sites and newsletters).\r\nAn Intermediate Front-End Developer works with web developers and back-end coder and is technically responsible for the overall quality, security and development of the online user experience.  To this extent, proofreading skills and an all-around attention to detail is vital, in order to provide all target users a high-quality & efficient experience.\r\n\r\nMain Responsibilities:  \r\n•\tPerform web and legacy system development, update and support.\r\n•\tMust have strong knowledge of front-end web technologies.\r\n•\tGood understanding of Web analytics and SEO techniques and how to implement them.\r\n•\tOptimizes web applications to ensure they are rendered consistently and efficiently in a cross-browser environment\r\n•\tSupport the development team to boost website security and propose initiatives to deliver full website performance and optimization.\r\n•\tContribute to continuous improvement by suggesting improvement to user interface or new technologies.\r\n•\tAnalyzes customer requirements and defines front-end solutions while providing assistance to the team for any problem and technical roadblocks. \r\n•\tRecommends new technologies and development strategies\r\n•\tCoordinate roll-out of new applications\r\n•\tProvides production support\r\n•\tPerforms other duties that maybe assigned from time to time.',
                isShowLogoInSearchResult35: true,
                publishedDate: 1568689556,
                isPremium: false,
                classifiedSkills: [
                    'JavaScript',
                    'HTML/CSS'
                ],
                jobRequirement: '1.\tYou’re :\r\n•\tMust display excellent leadership potential coupled with solid work ethic.\r\n•\tAbility to communicate clearly and concisely, both orally and in writing.\r\n•\tStrong analytical and problem solving skills.\r\n•\tKnowledge of basic project management methodology.\r\n•\tKnowledge in Scrum and Kanban is a must\r\n•\tKnowledge on any CMS (Content Management System) template will be plus\r\n\r\n2.\tQualifications and Experiences:\r\n•\tCandidates must possess at least a Bachelor’s degree, preferably in Computer Science/Information Technology or equivalent\r\n•\t3+ years developing front-end and user interface code for Web sites and mobile apps \r\n•\tFamiliarity with the latest mobile UI and UX design patterns\r\n•\tMust have strong knowledge of the following technologies and languages\r\n+\tResponsive Web Design\r\n+\tHTML5, Advanced HTML (Canvas, SVG)\r\n+\tCSS Pre-processors (SASS)\r\n+\tCSS Framework (Bootstrap)\r\n+\tCSS3 Animation\r\n+\tDOM Manipulation frameworks such as jQuery\r\n+\tJS frameworks (Angular, Node, React)\r\n•\tHas experience using \r\n+\tversion control tools such as Git Bash and Tortoise SVN\r\n+\tShell scripts and FTP/SFTP/SSH\r\n+\tJSON and REST APIs',
                objectID: '1162710',
                _highlightResult: {
                    jobTitle: {
                        value: 'Senior Front-End <em>Developer</em>',
                        matchLevel: 'partial',
                        fullyHighlighted: false,
                        matchedWords: [
                            'developer'
                        ]
                    },
                    skills: [
                        {
                            value: 'Software Engineering',
                            matchLevel: 'none',
                            matchedWords: []
                        },
                        {
                            value: 'HTML5',
                            matchLevel: 'none',
                            matchedWords: []
                        },
                        {
                            value: 'Front-End',
                            matchLevel: 'none',
                            matchedWords: []
                        },
                        {
                            value: '<em>Web</em> Development',
                            matchLevel: 'partial',
                            fullyHighlighted: false,
                            matchedWords: [
                                'web'
                            ]
                        },
                        {
                            value: 'Angular',
                            matchLevel: 'none',
                            matchedWords: []
                        }
                    ],
                    company: {
                        value: 'Gameloft',
                        matchLevel: 'none',
                        matchedWords: []
                    },
                    jobDescription: {
                        value: '*Job Purpose:\t\t\r\nThe Global <em>Web</em> Marketing team has an exciting opportunity for a Front-End <em>Developer</em> to join our team of developers; working on creating best-in-class <em>web</em>-based products supporting the company’s marketing efforts (consumer and corporate sites, customer care, forum, game sites, campaign sites and newsletters).\r\nAn Intermediate Front-End <em>Developer</em> works with <em>web</em> developers and back-end coder and is technically responsible for the overall quality, security and development of the online user experience.  To this extent, proofreading skills and an all-around attention to detail is vital, in order to provide all target users a high-quality & efficient experience.\r\n\r\nMain Responsibilities:  \r\n•\tPerform <em>web</em> and legacy system development, update and support.\r\n•\tMust have strong knowledge of front-end <em>web</em> technologies.\r\n•\tGood understanding of <em>Web</em> analytics and SEO techniques and how to implement them.\r\n•\tOptimizes <em>web</em> applications to ensure they are rendered consistently and efficiently in a cross-browser environment\r\n•\tSupport the development team to boost website security and propose initiatives to deliver full website performance and optimization.\r\n•\tContribute to continuous improvement by suggesting improvement to user interface or new technologies.\r\n•\tAnalyzes customer requirements and defines front-end solutions while providing assistance to the team for any problem and technical roadblocks. \r\n•\tRecommends new technologies and development strategies\r\n•\tCoordinate roll-out of new applications\r\n•\tProvides production support\r\n•\tPerforms other duties that maybe assigned from time to time.',
                        matchLevel: 'full',
                        fullyHighlighted: false,
                        matchedWords: [
                            'web',
                            'developer'
                        ]
                    },
                    jobRequirement: {
                        value: '1.\tYou’re :\r\n•\tMust display excellent leadership potential coupled with solid work ethic.\r\n•\tAbility to communicate clearly and concisely, both orally and in writing.\r\n•\tStrong analytical and problem solving skills.\r\n•\tKnowledge of basic project management methodology.\r\n•\tKnowledge in Scrum and Kanban is a must\r\n•\tKnowledge on any CMS (Content Management System) template will be plus\r\n\r\n2.\tQualifications and Experiences:\r\n•\tCandidates must possess at least a Bachelor’s degree, preferably in Computer Science/Information Technology or equivalent\r\n•\t3+ years developing front-end and user interface code for <em>Web</em> sites and mobile apps \r\n•\tFamiliarity with the latest mobile UI and UX design patterns\r\n•\tMust have strong knowledge of the following technologies and languages\r\n+\tResponsive <em>Web</em> Design\r\n+\tHTML5, Advanced HTML (Canvas, SVG)\r\n+\tCSS Pre-processors (SASS)\r\n+\tCSS Framework (Bootstrap)\r\n+\tCSS3 Animation\r\n+\tDOM Manipulation frameworks such as jQuery\r\n+\tJS frameworks (Angular, Node, React)\r\n•\tHas experience using \r\n+\tversion control tools such as Git Bash and Tortoise SVN\r\n+\tShell scripts and FTP/SFTP/SSH\r\n+\tJSON and REST APIs',
                        matchLevel: 'partial',
                        fullyHighlighted: false,
                        matchedWords: [
                            'web'
                        ]
                    }
                }
            },
            {
                benefits: [
                    {
                        benefitIconName: 'fa-graduation-cap',
                        benefitName: 'Training',
                        benefitValue: 'Continuous learning and career growth',
                        benefitId: 4
                    },
                    {
                        benefitIconName: 'fa-trophy',
                        benefitName: 'Awards',
                        benefitValue: 'Exciting challenges and rewarding recognitions',
                        benefitId: 5
                    },
                    {
                        benefitIconName: 'fa-dollar',
                        benefitName: 'Bonus',
                        benefitValue: 'Creative workplace with international teams of talents',
                        benefitId: 1
                    }
                ],
                expiredDate: 1571331599,
                classifiedConfidenceRoles: [
                    0.419200043232248,
                    0.256194138237985
                ],
                visibilityDisplay: 0,
                jobTitle: 'Senior PHP Developer',
                categoryVIs: [
                    'IT - Phần mềm'
                ],
                priorityOrder: 1570590318,
                salaryMax: 0,
                skills: [
                    'Software Engineering',
                    'Back-End',
                    'PHP',
                    'Scrum',
                    'Web Development'
                ],
                isSalaryVisible: false,
                isShowLogoInSearchResult: true,
                jobLevelVI: 'Nhân viên',
                isShowLogo: true,
                isPriorityJob: false,
                alias: 'senior-php-developer-189',
                company: 'Gameloft',
                categories: [
                    'IT - Software'
                ],
                salaryMin: 300,
                timestamp: '20191009101044',
                priorityOrder35: 1570590318,
                locationVIs: [
                    'Hồ Chí Minh'
                ],
                classifiedRoles: [
                    'Engineering Manager',
                    'Backend Developer'
                ],
                jobSalary: 300,
                companyLogo: 'https://images.vietnamworks.com/pictureofcompany/e0/4079410.png',
                locationIds: [
                    29
                ],
                jobLevelId: 5,
                userId: 407579,
                jobLevel: 'Experienced (non-manager)',
                onlineDate: 1570590318,
                jobId: 1162711,
                companyId: 1706,
                categoryIds: [
                    35
                ],
                classifiedConfidenceSkills: [
                    0.350894457428986,
                    0.202624349623947
                ],
                locations: [
                    'Ho Chi Minh'
                ],
                jobDescription: '*Job Purpose:\t\t\r\nThe Global Web Marketing team has an exciting opportunity for a Back-End Developer to join our team of developers, working on creating best-in-class web-based products supporting the company’s marketing efforts (consumer and corporate sites, customer care, forum, game sites, campaign sites and newsletters).\r\nAn Intermediate Back-End Developer is responsible for server-side web application logic and works hand in hand with the Front-End Developers on integration. He develops scripts and implements coding for various websites and applications using PHP to create dynamic web applications\r\n\r\nMain Responsibilities:  \r\n•\tPerform web and legacy system development, update and support.\r\n•\tInitiate and lead development of internal web tools and application, design and build back-office system from scratch.\r\n•\tDelivery high level solutions or subsystems like custom API’s, database modeling and design.\r\n•\tContribute to continuous improvement by suggesting improvement to user interface, software architecture or new technologies.\r\n•\tWork with the team manager to conduct performance reviews as well as hiring plans.\r\n•\tAnalyzes customer requirements and defines solutions and architecture plus assistance to the team on problems and technical roadblocks. \r\n•\tRecommends new technologies and development strategies\r\n•\tCoordinate roll-out of new applications\r\n•\tProvides production support\r\n•\tPerforms other duties that maybe assigned from time to time.',
                isShowLogoInSearchResult35: true,
                publishedDate: 1568689519,
                isPremium: false,
                classifiedSkills: [
                    'PHP',
                    'Java'
                ],
                jobRequirement: '1.\tYou’re :\r\n•\tMust display excellent leadership potential coupled with solid work ethic.\r\n•\tAbility to communicate clearly and concisely, both orally and in writing.\r\n•\tStrong analytical and problem solving skills.\r\n•\tKnowledge of basic project management methodology.\r\n•\tKnowledge in Scrum and Kanban is must.\r\n•\tKnowledge on any CMS (Content Management System) will be plus\r\n\r\n2.\tQualifications and Experiences:\r\n•\tCandidate must possess at least a Bachelor\'s/College Degree, Computer Science/Information Technology, Engineering (Computer/Telecommunication) or equivalent.\r\n•\tAt least 3 year(s) of working experience in the related field, preferably 2 years & up experienced in full stack PHP Development\r\n•\tHas strong knowledge of the following technologies and languages\r\no\tFull stack PHP development\r\no\tXAMP or WAMP stack and each of its core components.\r\no\tPHP Frameworks such as Zend Framework or Code-igniter.\r\n•\tHas experience using \r\no\tJSON and REST APIs\r\no\tVersion control tools such as Git Bash and Tortoise SVN.\r\no\tFTP/SFTP/SSH/Shell scripts\r\n•\tHas good experience with front-end code \r\no\tHTML, CSS, JavaScript (JS)\r\no\tDOM Manipulation frameworks such as jQuery\r\no\tJS frameworks (Angular, Node, React)',
                _geoloc: {
                    lng: 106.7131842,
                    lat: 10.8090852
                },
                objectID: '1162711',
                _highlightResult: {
                    jobTitle: {
                        value: 'Senior PHP <em>Developer</em>',
                        matchLevel: 'partial',
                        fullyHighlighted: false,
                        matchedWords: [
                            'developer'
                        ]
                    },
                    skills: [
                        {
                            value: 'Software Engineering',
                            matchLevel: 'none',
                            matchedWords: []
                        },
                        {
                            value: 'Back-End',
                            matchLevel: 'none',
                            matchedWords: []
                        },
                        {
                            value: 'PHP',
                            matchLevel: 'none',
                            matchedWords: []
                        },
                        {
                            value: 'Scrum',
                            matchLevel: 'none',
                            matchedWords: []
                        },
                        {
                            value: '<em>Web</em> Development',
                            matchLevel: 'partial',
                            fullyHighlighted: false,
                            matchedWords: [
                                'web'
                            ]
                        }
                    ],
                    company: {
                        value: 'Gameloft',
                        matchLevel: 'none',
                        matchedWords: []
                    },
                    jobDescription: {
                        value: '*Job Purpose:\t\t\r\nThe Global <em>Web</em> Marketing team has an exciting opportunity for a Back-End <em>Developer</em> to join our team of developers, working on creating best-in-class <em>web</em>-based products supporting the company’s marketing efforts (consumer and corporate sites, customer care, forum, game sites, campaign sites and newsletters).\r\nAn Intermediate Back-End <em>Developer</em> is responsible for server-side <em>web</em> application logic and works hand in hand with the Front-End Developers on integration. He develops scripts and implements coding for various websites and applications using PHP to create dynamic <em>web</em> applications\r\n\r\nMain Responsibilities:  \r\n•\tPerform <em>web</em> and legacy system development, update and support.\r\n•\tInitiate and lead development of internal <em>web</em> tools and application, design and build back-office system from scratch.\r\n•\tDelivery high level solutions or subsystems like custom API’s, database modeling and design.\r\n•\tContribute to continuous improvement by suggesting improvement to user interface, software architecture or new technologies.\r\n•\tWork with the team manager to conduct performance reviews as well as hiring plans.\r\n•\tAnalyzes customer requirements and defines solutions and architecture plus assistance to the team on problems and technical roadblocks. \r\n•\tRecommends new technologies and development strategies\r\n•\tCoordinate roll-out of new applications\r\n•\tProvides production support\r\n•\tPerforms other duties that maybe assigned from time to time.',
                        matchLevel: 'full',
                        fullyHighlighted: false,
                        matchedWords: [
                            'web',
                            'developer'
                        ]
                    },
                    jobRequirement: {
                        value: '1.\tYou’re :\r\n•\tMust display excellent leadership potential coupled with solid work ethic.\r\n•\tAbility to communicate clearly and concisely, both orally and in writing.\r\n•\tStrong analytical and problem solving skills.\r\n•\tKnowledge of basic project management methodology.\r\n•\tKnowledge in Scrum and Kanban is must.\r\n•\tKnowledge on any CMS (Content Management System) will be plus\r\n\r\n2.\tQualifications and Experiences:\r\n•\tCandidate must possess at least a Bachelor\'s/College Degree, Computer Science/Information Technology, Engineering (Computer/Telecommunication) or equivalent.\r\n•\tAt least 3 year(s) of working experience in the related field, preferably 2 years & up experienced in full stack PHP Development\r\n•\tHas strong knowledge of the following technologies and languages\r\no\tFull stack PHP development\r\no\tXAMP or WAMP stack and each of its core components.\r\no\tPHP Frameworks such as Zend Framework or Code-igniter.\r\n•\tHas experience using \r\no\tJSON and REST APIs\r\no\tVersion control tools such as Git Bash and Tortoise SVN.\r\no\tFTP/SFTP/SSH/Shell scripts\r\n•\tHas good experience with front-end code \r\no\tHTML, CSS, JavaScript (JS)\r\no\tDOM Manipulation frameworks such as jQuery\r\no\tJS frameworks (Angular, Node, React)',
                        matchLevel: 'none',
                        matchedWords: []
                    }
                }
            },
            {
                benefits: [
                    {
                        benefitIconName: 'fa-check-square-o',
                        benefitName: 'Others',
                        benefitValue: 'Dynamic & Friendly working environment',
                        benefitId: 15
                    },
                    {
                        benefitIconName: 'fa-graduation-cap',
                        benefitName: 'Training',
                        benefitValue: 'Overseas Training',
                        benefitId: 4
                    },
                    {
                        benefitIconName: 'fa-dollar',
                        benefitName: 'Bonus',
                        benefitValue: 'Competitive salary and bonus up to 300%',
                        benefitId: 1
                    }
                ],
                expiredDate: 1571417999,
                classifiedConfidenceRoles: [
                    0.424526788682568,
                    0.280813874503942
                ],
                visibilityDisplay: 1,
                jobTitle: '[URGENT] Web Developer',
                categoryVIs: [
                    'Công nghệ cao',
                    'IT - Phần mềm',
                    'IT-Phần cứng/Mạng'
                ],
                priorityOrder: 1570590222,
                salaryMax: 1500,
                skills: [
                    'Java',
                    'Weblogic',
                    'Restful Api',
                    'HTML',
                    'Spring'
                ],
                isSalaryVisible: false,
                isShowLogoInSearchResult: true,
                jobLevelVI: 'Nhân viên',
                isShowLogo: true,
                isPriorityJob: false,
                isShowLogoInSearchResult66: true,
                alias: 'urgent-web-developer-2-1',
                priorityOrder55: 1570590222,
                company: 'Shinhan DS Vietnam Company Limited',
                categories: [
                    'IT - Hardware/Networking',
                    'High Technology',
                    'IT - Software'
                ],
                salaryMin: 500,
                timestamp: '20191009101028',
                priorityOrder35: 1570590222,
                locationVIs: [
                    'Hồ Chí Minh'
                ],
                classifiedRoles: [
                    'Frontend Developer',
                    'Backend Developer'
                ],
                jobSalary: 1500,
                companyLogo: 'https://images.vietnamworks.com/pictureofcompany/92/10668657.png',
                locationIds: [
                    29
                ],
                jobLevelId: 5,
                userId: 5191438,
                jobLevel: 'Experienced (non-manager)',
                onlineDate: 1570590222,
                jobId: 1163358,
                companyId: 284536,
                categoryIds: [
                    66,
                    35,
                    55
                ],
                classifiedConfidenceSkills: [
                    0.549274909799395,
                    0.197273371406292
                ],
                isShowLogoInSearchResult55: true,
                priorityOrder66: 1570590222,
                locations: [
                    'Ho Chi Minh'
                ],
                jobDescription: '- Investigate & gather knowledge of new technologies & new industrial business domain to determine software solution and/or conduct domain-specific development (Was Developer).\r\n- Responsible for implementing, customizing, maintaining & debugging software solution.\r\n- Support to Web Developers and Maintain Administrator Web page.\r\n- Contribute to develop Web application for Internet banking, Mobile Banking Team.\r\n- Responsible for test & product review.\r\n- Understand client requirements and how to create framework from customers. \r\n- Contribute in system integration, fixing of bugs reported by customer.\r\n- START WORKING: September, 2019',
                isShowLogoInSearchResult35: true,
                publishedDate: 1568775822,
                isPremium: false,
                classifiedSkills: [
                    'Java',
                    'HTML/CSS'
                ],
                jobRequirement: '- Graduate college or university with major Information Technology, Computer Science, Software Engineering or related fields. \r\n- Have 3 - 5 year experience in Weblogic, Spring Framework, Rest API, Java, HTML, Javascript\r\n- Experience having for Web Development in Banks, Finance, Sales is preferable.\r\n- Be able to communicate in English \r\n- Self-learning skill, well-organized, logic thinking, high sense of responsibility.\r\n- Good technical skill - Good working attitude - Long-term working',
                _geoloc: {
                    lng: 106.6974318,
                    lat: 10.7827533
                },
                objectID: '1163358',
                _highlightResult: {
                    jobTitle: {
                        value: '[URGENT] <em>Web</em> <em>Developer</em>',
                        matchLevel: 'full',
                        fullyHighlighted: false,
                        matchedWords: [
                            'web',
                            'developer'
                        ]
                    },
                    skills: [
                        {
                            value: 'Java',
                            matchLevel: 'none',
                            matchedWords: []
                        },
                        {
                            value: 'Weblogic',
                            matchLevel: 'none',
                            matchedWords: []
                        },
                        {
                            value: 'Restful Api',
                            matchLevel: 'none',
                            matchedWords: []
                        },
                        {
                            value: 'HTML',
                            matchLevel: 'none',
                            matchedWords: []
                        },
                        {
                            value: 'Spring',
                            matchLevel: 'none',
                            matchedWords: []
                        }
                    ],
                    company: {
                        value: 'Shinhan DS Vietnam Company Limited',
                        matchLevel: 'none',
                        matchedWords: []
                    },
                    jobDescription: {
                        value: '- Investigate & gather knowledge of new technologies & new industrial business domain to determine software solution and/or conduct domain-specific development (Was <em>Developer</em>).\r\n- Responsible for implementing, customizing, maintaining & debugging software solution.\r\n- Support to <em>Web</em> Developers and Maintain Administrator <em>Web</em> page.\r\n- Contribute to develop <em>Web</em> application for Internet banking, Mobile Banking Team.\r\n- Responsible for test & product review.\r\n- Understand client requirements and how to create framework from customers. \r\n- Contribute in system integration, fixing of bugs reported by customer.\r\n- START WORKING: September, 2019',
                        matchLevel: 'full',
                        fullyHighlighted: false,
                        matchedWords: [
                            'web',
                            'developer'
                        ]
                    },
                    jobRequirement: {
                        value: '- Graduate college or university with major Information Technology, Computer Science, Software Engineering or related fields. \r\n- Have 3 - 5 year experience in Weblogic, Spring Framework, Rest API, Java, HTML, Javascript\r\n- Experience having for <em>Web</em> Development in Banks, Finance, Sales is preferable.\r\n- Be able to communicate in English \r\n- Self-learning skill, well-organized, logic thinking, high sense of responsibility.\r\n- Good technical skill - Good working attitude - Long-term working',
                        matchLevel: 'partial',
                        fullyHighlighted: false,
                        matchedWords: [
                            'web'
                        ]
                    }
                }
            }
        ]
    }
  console.log("Job hits:", jobData.hits); 
  console.log(jobData.hits[0]);
  let { jobTitle, benefits } = jobData.hits[0];
  console.log(`First job title:\n${jobTitle}`); 
  console.log(benefits); 
  console.log("First job benefits:");
  for (let i = 0; i < benefits.length; i++) {
    let { benefitValue } = benefits[i];
    console.log("-", benefitValue);
  }
  
  for (let i = 0; i < jobData.hits.length; i++) {
    let { jobTitle, benefits } = jobData.hits[i];
    console.log(jobTitle);
    console.log("Benefits:");
    for (let j = 0; j < benefits.length; j++) {
      let { benefitValue } = benefits[j];
      console.log("-", benefitValue);
    }
    console.log("------------------------------------------------------------");
  }
  
  for (let i = 0; i < length; i++) {
    let { jobTitle, locationVIs, jobSalary, benefits, skills } = jobData.hits[i];
    console.log("Title:", jobTitle);
    console.log(`Salary: ${jobSalary}$`);
    console.log("Location:", ...locationVIs);
    console.log("Benefits:");
    for (let j = 0; j < benefits.length; j++) {
      let { benefitValue } = benefits[j];
      console.log("-", benefitValue);
    }
    console.log("Skills:");
    for (let k = 0; k < skills.length; k++) {
      console.log(skills[k],',');
    }
  
  const FIRST_DATA = {
    friedRice: {
      Price: 30,
      vnName: "Com rang dua bo",
    },
    noodles: {
      price: 20,
      vnName: "My tom chanh",
    },
    pho: {
      price: 35,
      vnName: "Pho bo tai chin",
    },
  };
  let secondData = { ...FIRST_DATA }; 
  console.log("before:", FIRST_DATA);
  delete newData.noodles; 
  console.log("after:", secondData)