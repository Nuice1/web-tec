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