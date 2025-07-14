// scripts.js

document.getElementById("signup-form").addEventListener("submit", function(event) {
    event.preventDefault();

    // 폼 데이터 가져오기
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    // 유효성 검사 (간단한 예시)
    if (!name || !email || !password) {
        alert("모든 필드를 채워주세요!");
        return;
    }

    // 폼 데이터 확인
    console.log("이름:", name);
    console.log("이메일:", email);
    console.log("비밀번호:", password);

    // 서버에 데이터를 보내는 부분은 AJAX나 fetch로 구현할 수 있음.
    alert("회원가입이 완료되었습니다!");

    // 폼 초기화
    document.getElementById("signup-form").reset();
});
