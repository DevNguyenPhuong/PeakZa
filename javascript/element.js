function createFooter() {
  let html = `  <footer class="footer">
  <div class="footer-account">
    <h3>Tài khoản</h3>
    <p>Tạo tài khoản</p>
    <p>Đăng nhập</p>
    <p>Ứng dụng IOS</p>
    <p>ứng dụng Android</p>
  </div>

  <div class="footer-contact">
    <h3>Liên hệ</h3>
    <p>51/12 Tô Ký, quận 12, thành phố Hồ Chí Minh</p>

    <a href="mailto:animax@animax.com">PeakZa@PeakZa.com</a>
  </div>

  <div class="footer-logo">PeakZa</div>

  <div class="footer-company">
    <h3>Doanh nghiệp</h3>
    <p>Về chúng tôi</p>
    <p>Về nghiệp vụ</p>
    <p>Đồng hành cùng chúng tôi</p>
    <p>Định hướng</p>
  </div>

  <div class="footer-resource">
    <h3>Tài nguyên</h3>
    <p>Nguồn tài nguyên</p>
    <p>Trung tâm hỗ trợ</p>
    <p>Điều khoản & chính sách</p>
  </div>
</footer>`;
  const body = document.querySelector("body");
  body.insertAdjacentHTML("beforeend", html);
}
function createUserModal() {
  const html = `<div class="containerModal modal hidden" id="containerModal">
  <div class="form-container sign-up-container">
    <div class="btn--close-modal">
      <ion-icon name="close-outline"></ion-icon>
    </div>
    <form action="#" class="form-modal">
      <h1 class="form-header">Đăng ký</h1>

      <div class="input-group">
        <label for="name">Họ và tên</label>
        <input
          id="name"
          type="text"
          class="input-form-modal"
          placeholder="Nguyễn Văn A"
        />
        <p></p>
      </div>

      <div class="input-group">
        <label for="email">Email</label>
        <input
          id="email"
          type="text"
          class="input-form-modal"
          placeholder="xxx@xxx.com"
        />
        <p></p>
      </div>

      <div class="input-group">
        <label for="password">Mật khẩu</label>
        <input
          id="password"
          type="password"
          class="input-form-modal"
          placeholder="password"
        />
        <p></p>
      </div>

      <label class="gender-ratio">
        Giới tính
        <p class="gender-ratio-error gender"></p>
      </label>

      <div class="input-group-ratio input-group-ratio-gender">
        <div class="form__radio-group">
          <input
            type="radio"
            class="form__radio-input"
            id="male"
            name="size"
          />
          <label for="male" class="form__radio-label">
            <span class="form__radio-button"></span>
            <p>Nam</p>
          </label>
        </div>

        <div class="form__radio-group">
          <input
            type="radio"
            class="form__radio-input"
            id="female"
            name="size"
          />
          <label for="female" class="form__radio-label">
            <span class="form__radio-button"></span>
            <p>Nữ</p>
          </label>
        </div>
      </div>

      <label class="gender-ratio">
        Sở thích
        <p class="gender-ratio-error gender-ratio-error-checkboxes"></p>
      </label>
      <div class="checkboxes">
        <label class="checkbox-container">
          <input type="checkbox" />
          <span class="checkmark"></span>đọc sách
        </label>

        <label class="checkbox-container">
          <input type="checkbox" />
          <span class="checkmark"></span>
          du lịch
        </label>

        <label class="checkbox-container">
          <input type="checkbox" />
          <span class="checkmark"></span>âm nhạc
        </label>

        <label class="checkbox-container">
          <input type="checkbox" />
          <span class="checkmark"></span>ẩm thực
        </label>

        <label class="checkbox-container">
          <input type="checkbox" />
          <span class="checkmark"></span>khác
        </label>
      </div>

      <label class="gender-ratio">
        Quốc tịch
        <p class="gender-ratio-error gender-ratio-error-national"></p>
      </label>

      <select name="national" id="national" class="input-form-select">
        <option value="none">Chọn quốc tịch</option>
        <option value="VN">Việt Nam</option>
        <option value="En">Anh</option>
        <option value="Fr">Pháp</option>
        <option value="Ger">Đức</option>
      </select>

      <label class="gender-ratio">
        Ghi chú
        <p class="gender-ratio-error gender-ratio-error-comment"></p>
      </label>
      <textarea class="comment" maxlength="201"></textarea>

      <button class="btn btn--medium btn--red">Đăng ký</button>
    </form>
  </div>
  <div class="form-container sign-in-container">
    <div class="btn--close-modal">
      <ion-icon name="close-outline"></ion-icon>
    </div>
    <form action="#" class="form-modal">
      <h1 class="form-header">Đăng nhập</h1>
      <div class="social-container">
        <ion-icon name="logo-google"></ion-icon>
        <ion-icon name="logo-github"></ion-icon>
        <ion-icon name="logo-linkedin"></ion-icon>
      </div>
      <span>Hoặc đăng nhập bằng tài khoản của bạn</span>
      <div class="input-group">
        <label for="email">Email</label>
        <input
          id="emailx"
          type="text"
          class="input-form-modal"
          placeholder="xxx@xxx.com"
        />
        <p></p>
      </div>

      <div class="input-group">
        <label for="password">Mật khẩu</label>
        <input
          id="passwordx"
          type="password"
          class="input-form-modal"
          placeholder="password"
        />
        <p></p>
      </div>

      <button class="btn btn--medium btn--red login-btn">Đăng nhậP</button>
    </form>
  </div>
  <div class="overlay-container">
    <div class="overlay-form">
      <div class="overlay-panel overlay-left">
        <h1>Chào mừng trở lại !</h1>
        <p>
          Để giữ liên lạc với chúng tôi, hãy đăng nhập bằng thông tin cá
          nhân
        </p>
        <button class="ghost" id="leftForm">Đăng nhập</button>
      </div>
      <div class="overlay-panel overlay-right">
        <h1>Xin chào, thực khách !</h1>
        <p>
          Nhập thông tin cá nhân của bạn để bắt đầu trải nghiệm ẩm thực !
        </p>
        <button class="ghost" id="rightForm">Đăng ký</button>
      </div>
    </div>
  </div>
</div>
<div class="overlay hidden"></div>`;
  const body = document.querySelector("body");
  body.insertAdjacentHTML("beforeend", html);
}
function createPaymentModal() {
  const html = ` <div class="containerModal modal hidden" id="containerModal">
  <div class="form-container sign-up-container">
    <div class="btn--close-modal">
      <ion-icon name="close-outline"></ion-icon>
    </div>

    <form action="#" class="form-modal form-payment">
      <h1 class="form-header">Thanh toán bằng thẻ ngân hàng</h1>
      <div class="social-container">
        <ion-icon name="logo-google"></ion-icon>
        <ion-icon name="logo-github"></ion-icon>
        <ion-icon name="logo-linkedin"></ion-icon>
      </div>

      <input type="text" class="input-form-modal" placeholder="Họ và tên"  required />
      <input
        type="number"
        class="input-form-modal"
        placeholder="Số tài khoản"
        required
      />
      <input
        type="expiredDate"
        class="input-form-modal"
        placeholder="ngày hết hạn"
        required
      />

      <input type="ccv" class="input-form-modal" placeholder="CCV" />

      <button class="btn btn--medium btn--red ">Thanh toán</button>
    </form>
  </div>
  <div class="form-container sign-in-container">
    <div class="btn--close-modal">
      <ion-icon name="close-outline"></ion-icon>
    </div>
    <form action="#" class="form-modal form-payment">
      <h1 class="form-header">Thanh toán khi nhận hàng</h1>
      <div class="social-container">
        <ion-icon name="logo-google"></ion-icon>
        <ion-icon name="logo-github"></ion-icon>
        <ion-icon name="logo-linkedin"></ion-icon>
      </div>
      <input type="text" class="input-form-modal" placeholder="Họ và tên"  required value="Nguyễn Văn A" />
      <input type="text" class="input-form-modal" placeholder="địa chỉ"  required value="5/88 Tô Ký" />
      <input
        type="number"
        class="input-form-modal"
        placeholder="số điện thoại"
        required
        value="0123456789"
      />

      <button class="btn btn--medium btn--red btn--payment">Thanh toán</button>
    </form>
  </div>
  <div class="overlay-container">
    <div class="overlay-form">
      <div class="overlay-panel overlay-left">
        <h1>Thanh toán bằng thẻ ngân hàng</h1>
        <p>
          Quy trình an toàn, uy tín, liên kết với các ngân hàng hàng đầu
          trên thế giới
        </p>
        <button class="ghost" id="leftForm">
          Thanh toán khi nhận hàng
        </button>
      </div>
      <div class="overlay-panel overlay-right">
        <h1>Thanh toán khi nhận hàng</h1>
        <p>
          Thời gian nhanh chóng, chúng tôi đảm bảo thức ăn luôn trong tình
          trạng tốt nhất
        </p>
        <button class="ghost" id="rightForm">
          Thanh toán bằng thẻ ngân hàng
        </button>
      </div>
    </div>
  </div>
</div>
<div class="overlay hidden"></div>
`;
  const body = document.querySelector("body");
  body.insertAdjacentHTML("beforeend", html);
}

function createHeader() {
  let headerPageDetail = `   <div class="nav">
  <a href="../../index.html" class="logo"> PeakZa </a>
  <nav class="main-nav">
    <ul class="main-nav-list">
      <li>
        <a href="../../index.html">Trang chủ</a>
      </li>
      <li><a href="../../content/pizza.html">Pizza</a></li>
      <li><a href="../../content/combo.html">Combo</a></li>
      <li><a href="../../content/Trang-mieng.html">Tráng miệng</a></li>
      <li><a href="../../content/Do-uong.html">Đồ uống</a></li>
      <a class="btn btn--red btn--aminated btn--medium btn--show-modal"
        >Tham gia ngay
      </a>
    </ul>
  </nav>
  <div class="header-account">
    <div class="search sub-section">
      <input
        type="text"
        class="search-input"
        placeholder="Tìm kiếm"
        id="search"
      />
      <label for="search ">
        <ion-icon name="search-outline" class="search-btn"></ion-icon>
      </label>
    </div>
    <a href="../../content/gio-hang.html"
      ><ion-icon name="cart-outline"></ion-icon
    ></a>
    <a href="../../content/mat-hang.html">
            <ion-icon name="bag-outline"></ion-icon>
    </a>
    <a href="../../content/user.html"
      ><ion-icon name="person-outline"></ion-icon
    ></a>
  </div>
</div>
`;
  let headerPageContent = `<div class="nav">
  <a href="../index.html" class="logo"> PeakZa </a>
  <nav class="main-nav">
    <ul class="main-nav-list">
      <li>
        <a href="../index.html">Trang chủ</a>
      </li>
      <li><a href="./pizza.html">Pizza</a></li>
      <li><a href="./combo.html">Combo</a></li>
      <li><a href="./Trang-mieng.html">Tráng miệng</a></li>
      <li><a href="./Do-uong.html">Đồ uống</a></li>
      <a
        class="btn btn--red btn--aminated btn--medium btn--show-modal"
        href="#"
        >Tham gia ngay
      </a>
    </ul>
  </nav>
  <div class="header-account">
    <div class="search sub-section">
      <input
        type="text"
        class="search-input"
        placeholder="Tìm kiếm"
        id="search"
      />
      <label for="search ">
        <ion-icon name="search-outline" class="search-btn"></ion-icon>
      </label>
    </div>
    <a href="./gio-hang.html"><ion-icon name="cart-outline"></ion-icon></a>
    <a href="./mat-hang.html">
      <ion-icon name="bag-outline"></ion-icon>
    </a>
    <a href="../content/user.html"
      ><ion-icon name="person-outline"></ion-icon
    ></a>
  </div>
</div>`;
  const body = document.querySelector("body");
  const main = document.querySelector(".section-gallery");
  const slider = document.querySelector(".slider-container");
  !main && slider && body.insertAdjacentHTML("afterbegin", headerPageDetail);
  !main && !slider && body.insertAdjacentHTML("afterbegin", headerPageContent);
}
export function initElement() {
  createHeader();
  createFooter();
  const btnsOpenModal = document.querySelector(".btn--show-modal");
  if (btnsOpenModal.textContent.trim() === "Tham gia ngay") createUserModal();
  if (btnsOpenModal.textContent.trim() === "Thanh toán") createPaymentModal();
}
