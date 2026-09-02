document.addEventListener('DOMContentLoaded', () => {
    const cursor = document.querySelector('.custom-cursor');

    // เมื่อมีการขยับเมาส์ ให้ย้ายตำแหน่ง div วงกลมตามพิกัด X, Y
    document.addEventListener('mousemove', (e) => {
        cursor.style.left = e.clientX - 10 + 'px';
        cursor.style.top = e.clientY - 10 + 'px';
    });
});
document.addEventListener('DOMContentLoaded', () => {

    // --- ส่วนที่ 1: ตั้งเวลาให้ GIF ค่อยๆ จางหายแล้วเปิดหน้าหลัก ---
    const displayTime = 3000; // เวลาโชว์ GIF (3000 = 3 วินาที)
    const loader = document.getElementById('gif-loader');
    const mainContent = document.getElementById('main-content');

    setTimeout(() => {
        // ค่อยๆ ปรับความโปร่งใสของ GIF
        loader.style.opacity = '0';

        setTimeout(() => {
            loader.style.display = 'none'; // ซ่อนหน้า GIF ไปเลย
            mainContent.style.display = 'block'; // แสดงหน้าหลัก
            
            // ค่อยๆ เล่นเอฟเฟกต์จางเข้า (Fade In) ของหน้าหลัก
            setTimeout(() => {
                mainContent.style.opacity = '1';
            }, 50);
        }, 600); // รอ animation 0.6 วินาที

    }, displayTime);


   

});