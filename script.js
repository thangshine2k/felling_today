function openGift(type) {
  const message = document.getElementById("message");

  if (type === 1) {
    message.innerHTML = `
💌 <b>Thư gửi em</b><br><br>
Gặp em là một điều rất bất ngờ với anh.<br>
Nhưng ở cạnh em anh luôn thấy rất dễ chịu.<br><br>

Em vừa cá tính, vừa hay trả treo 😆<br>
nhưng lại đáng yêu theo cách rất riêng.<br><br>

Cảm ơn em vì đã xuất hiện trong cuộc đời anh 🌷
`;
  }

  if (type === 2) {
    message.innerHTML = `
🌹 <b>Lời chúc 8/3</b><br><br>

Chúc cô gái của anh luôn vui vẻ,<br>
luôn xinh đẹp,<br>
và luôn giữ nụ cười dễ thương đó.<br><br>

Dù sau này có thế nào,<br>
anh vẫn mong sẽ được ở bên em<br>
thêm nhiều ngày 8/3 nữa 💖
`;
  }

  if (type === 3) {
    message.innerHTML = `
🎁 <b>Bất ngờ bí mật</b><br><br>

Phần quà thật sự là:<br><br>

Một cái ôm thật chặt 🤗<br>
Một nụ hôn thật nhẹ 😘<br>
và một lời hứa rằng...<br><br>

Anh sẽ luôn thương em nhiều hơn mỗi ngày 💕
`;
  }

  createHearts();
}

function createHearts() {
  for (let i = 0; i < 25; i++) {
    const heart = document.createElement("div");
    heart.className = "heart";
    heart.innerHTML = "💗";

    heart.style.left = Math.random() * 100 + "vw";
    heart.style.fontSize = Math.random() * 20 + 20 + "px";

    document.body.appendChild(heart);

    setTimeout(() => {
      heart.remove();
    }, 4000);
  }
}
