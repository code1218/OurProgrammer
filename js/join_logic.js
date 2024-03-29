const email_ref = document.querySelector("#floatingEmail");
const password_ref = document.querySelector("#floatingPassword");
const repassword_ref = document.querySelector("#floatingRePassword");

email_ref.onblur = () => {
    if(email_ref.value == "skjil1218@gmail.com") {
        email_ref.classList.remove("is-valid");
        email_ref.classList.add("is-invalid");
    }else{
        email_ref.classList.remove("is-invalid");
        email_ref.classList.add("is-valid");
    }
}

password_ref.onblur = () => {
    checkPassword(email_ref.value, password_ref.value);
}

repassword_ref.onblur = () => {
    
}

function checkPassword(id,password){
    if(!/^[a-zA-Z0-9]{10,15}$/.test(password)){
        alert('숫자와 영문자 조합으로 10~15자리를 사용해야 합니다.');
        return false;
    }
    var checkNumber = password.search(/[0-9]/g);
    var checkEnglish = password.search(/[a-z]/ig);
    if(checkNumber <0 || checkEnglish <0){
        alert("숫자와 영문자를 혼용하여야 합니다.");
        return false;
    }
    if(/(\w)\1\1\1/.test(password)){
        alert('444같은 문자를 4번 이상 사용하실 수 없습니다.');
        return false;
    }
    if(password.search(id) > -1){
        alert("비밀번호에 아이디가 포함되었습니다.");
        return false;
    }
    return true;
}