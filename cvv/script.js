// รอให้หน้าเว็บ (DOM) โหลดเสร็จสมบูรณ์ก่อน ค่อยเริ่มรันชุดคำสั่งด้านใน
document.addEventListener('DOMContentLoaded', () => {

    // ค้นหา Element สำหรับทำ Custom Cursor (เคอร์เซอร์แต่งพิเศษ) และตัวโหลดหน้าเว็บ (Loader)
    const cursor = document.querySelector('.custom-cursor');
    const loader = document.getElementById('gif-loader');
    const mainContent = document.getElementById('main-content');

    // ตรวจสอบว่ามีตัวแปร cursor อยู่จริงไหม ถ้ามีให้ทำงานดักจับการขยับเมาส์
    if (cursor) {
        document.addEventListener('mousemove', (e) => {
            // ปรับตำแหน่ง CSS ของ cursor ตามตำแหน่งพิกัด X และ Y ของเมาส์ (ลบ 12 เพื่อจัดกึ่งกลาง)
            cursor.style.left = `${e.clientX - 12}px`;
            cursor.style.top = `${e.clientY - 12}px`;
        });
    }

    // ตรวจสอบว่ามีตัวโหลด (loader) และเนื้อหาหลัก (mainContent) อยู่จริงไหม
    if (loader && mainContent) {
        // ซ่อนเนื้อหาหลักและปรับความโปร่งแสงเป็น 0 ไว้รอก่อน
        mainContent.style.display = 'none';
        mainContent.style.opacity = '0';

        // หน่วงเวลา 3 วินาที (3000 มิลลิวินาที) ก่อนเริ่มซ่อนหน้า Loader
        setTimeout(() => {
            loader.style.opacity = '0'; // ค่อยๆ เฟดหน้า Loader ให้จางลง

            // รอต่ออีก 0.6 วินาที (600 มิลลิวินาที) ให้เฟดเสร็จ แล้วซ่อน Loader พร้อมแสดงเนื้อหาหลัก
            setTimeout(() => {
                loader.style.display = 'none';
                mainContent.style.display = 'block';

                // หน่วงเวลาสั้นๆ 50 มิลลิวินาที แล้วปรับความโปร่งแสงเนื้อหาหลักเป็น 1 เพื่อให้ค่อยๆ เฟดอินขึ้นมา
                setTimeout(() => {
                    mainContent.style.opacity = '1';
                }, 50);
            }, 600);
        }, 3000);
    }

  let userGuess = null;

    while (true) {
        userGuess = window.prompt("Let's play a guessing game! \nWho am I?\n(Please enter a name)");

        // ถ้าผู้ใช้กด Cancel (userGuess เป็น null) ให้แสดงข้อความบอกลาแล้วหยุดลูปทันที
        if (userGuess === null) {
            window.alert("Game cancelled. See you next time!");
            break;
        }

        // ถ้าผู้ใช้พิมพ์ข้อความมาแล้ว (ไม่ว่างเปล่า) ให้หลุดออกจากลูปเพื่อไปเช็คคำตอบ
        if (userGuess.trim() !== "") {
            break;
        }

        // ถ้ากด OK โดยไม่พิมพ์อะไรเลย (ปล่อยว่าง) ลูปจะวนกลับไปถามใหม่เองอัตโนมัติ
    }

    // ตรวจสอบคำตอบเฉพาะเมื่อผู้ใช้ไม่ได้กด Cancel
    if (userGuess !== null) {
        if (userGuess.trim().toLowerCase() === 'nuice') {
            window.alert('Hell yeah!!\nYou know it.');
        } else {
            window.alert('NAH bro, not today buddy!');
        }
    }
}); // สิ้นสุดการทำงานของ Event DOMContentLoaded
window.alert("Welcome to my website! \n\nThis is a personal project. \n\nIf you have any questions don't ask me, See you in there. \n\nThank you for visiting!");
let numberGuess = window.prompt("Guess What the number in my head ? \n(Please enter a number between 1 and 10)");
if(numberGuess ==  7) { window.alert(" guessed it right!"); } else { window.alert("Nah bro, not today buddy!"); }


document.addEventListener("DOMContentLoaded", function() {

    // 1. Burger Menu (ซ่อน/แสดงเมนูบนมือถือ)
    const burgerBtn = document.getElementById("burger-btn");
    const navMenu = document.getElementById("nav-menu");

    if (burgerBtn && navMenu) {
        burgerBtn.addEventListener("click", function() {
            navMenu.classList.toggle("show");
        });
    }

    // 2. Contact Form Validation & เก็บข้อมูลลงตัวแปร
    const contactForm = document.getElementById("contact-form");

    if (contactForm) {
        contactForm.addEventListener("submit", function(event) {
            event.preventDefault(); // ป้องกันไม่ให้หน้าเว็บรีโหลดทันที

            // ดึงค่าจากฟอร์ม และทำความสะอาดข้อมูลเบื้องต้น (Sanitization) ด้วย .trim()
            const nameInput = document.getElementById("name").value.trim();
            const emailInput = document.getElementById("email").value.trim();
            const messageInput = document.getElementById("message").value.trim();

            // เก็บลงใน JavaScript Variables ตามโจทย์
            const contactData = {
                name: nameInput,
                email: emailInput,
                message: messageInput
            };

            console.log("Saved Contact Data:", contactData);
            alert("Thank you, " + contactData.name + "! Your message has been saved.");
            
            // ล้างค่าในฟอร์มหลังกดส่ง
            contactForm.reset();
        });
    }

    // 3. Visitor Counter (คำนวณและแสดงจำนวนผู้เข้าชม)
    const visitorCountSpan = document.getElementById("visitor-count");
    if (visitorCountSpan) {
        let visitors = localStorage.getItem("siteVisitors");
        
        if (!visitors) {
            visitors = 1; // ถ้ายังไม่มีในเครื่อง ให้เริ่มที่ 1
        } else {
            visitors = parseInt(visitors) + 1; // เพิ่มจำนวนทุกครั้งที่เปิดเว็บ
        }
        
        localStorage.setItem("siteVisitors", visitors);
        visitorCountSpan.textContent = visitors;
    }

    // 4. Go to Top Floating Button (ซ่อน/แสดงปุ่ม และเลื่อนกลับขึ้นด้านบน)
    const topBtn = document.getElementById("top-btn");

    window.addEventListener("scroll", function() {
        if (window.scrollY > 200) {
            topBtn.style.display = "block"; // แสดงปุ่มเมื่อเลื่อนลงมาเกิน 200px
        } else {
            topBtn.style.display = "none";  // ซ่อนปุ่มเมื่ออยู่ด้านบน
        }
    });

    if (topBtn) {
        topBtn.addEventListener("click", function() {
            window.scrollTo({
                top: 0,
                behavior: "smooth" // เลื่อนขึ้นแบบนุ่มนวล
            });
        });
    }

});

// 5. Image Carousel (ทำสไลด์ตามโจทย์)
    // 5. Image Carousel (ทำสไลด์ตามโจทย์)
    const images = [
        "space.png", // รูปที่ 1
        "https://cdn.pixabay.com/photo/2020/07/05/10/00/books-5372392_1280.jpg", // รูปที่ 2
        "https://cdn.pixabay.com/photo/2020/08/07/04/59/open-country-5469693_1280.jpg", // รูปที่ 3
       
    ];
    let currentIndex = 0;
    const carouselImg = document.getElementById("carousel-img");
    const prevBtn = document.getElementById("prev-btn");
    const nextBtn = document.getElementById("next-btn");

    if (carouselImg && prevBtn && nextBtn) {
        prevBtn.addEventListener("click", () => {
            currentIndex = (currentIndex - 1 + images.length) % images.length;
            carouselImg.src = images[currentIndex];
        });

        nextBtn.addEventListener("click", () => {
            currentIndex = (currentIndex + 1) % images.length;
            carouselImg.src = images[currentIndex];
        });
    }

    // ฟังก์ชันช่วย Sanitize ข้อมูลเบื้องต้น (ป้องกันสัญลักษณ์อันตราย)
    function sanitizeInput(str) {
        return str.replace(/</g, "&lt;").replace(/>/g, "&gt;");
    }
    // 1. สร้างฟังก์ชันสำหรับทำ Sanitize ข้อมูล
function sanitizeInput(str) {
    return str.replace(/&/g, "&amp;")
              .replace(/</g, "&lt;")
              .replace(/>/g, "&gt;")
              .replace(/"/g, "&quot;")
              .replace(/'/g, "&#039;");
}

// 2. นำไปใช้ตอนรับค่าจากฟอร์มติดต่อ
const contactForm = document.getElementById("contact-form");

if (contactForm) {
    contactForm.addEventListener("submit", function(event) {
        event.preventDefault(); // ป้องกันไม่ให้หน้าเว็บรีโหลด

        // ดึงค่ามาแล้วผ่านฟังก์ชัน sanitizeInput() และ .trim() ทันที
        const nameInput = sanitizeInput(document.getElementById("name").value.trim());
        const emailInput = sanitizeInput(document.getElementById("email").value.trim());
        const messageInput = sanitizeInput(document.getElementById("message").value.trim());

        // เก็บลงใน JavaScript Variables ตามโจทย์
        const contactData = {
            name: nameInput,
            email: emailInput,
            message: messageInput
        };

        console.log("Sanitized & Saved Contact Data:", contactData);
        alert("Thank you, " + contactData.name + "! Your message has been safely sanitized and saved.");
        
        // ล้างค่าในฟอร์ม
        contactForm.reset();
    });
}