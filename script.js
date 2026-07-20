/* ===================================================================
   BERGAMO — Menu data & behaviour
   Sections: 1. Menu data   2. DOM references   3. Rendering helpers
             4. Navigation (home / category / detail)
   =================================================================== */

/* ---------- 0. WhatsApp order settings ----------
   Replace with your real WhatsApp Business number in international
   format, digits only (no +, no spaces, no leading 0).
   Example for Russia: 79261234567 */
const WHATSAPP_NUMBER = "79286710531"; 

/* ---------- 1. Menu data ----------
   Content taken from the physical menu board (pizza / sets / rolls /
   drinks / salads / fast food / tea / hot dishes). Edit freely to
   update prices or descriptions.

   Photos: add an "img" field with a path to show a real photo instead
   of the emoji placeholder, e.g.
     { name: "Маргарита", price: "500 р.", emoji: "🍅", img: "images/margherita.jpg", desc: "..." }
   Put your photo files in an "images" folder next to index.html.
   If "img" is left out, the emoji is shown instead — so you can add
   photos gradually, one dish at a time. */
const MENU = {
  "Пицца": {
    subtitle: "Тесто на выбор, 30 см",
    items: [
      { name: "Пицца Ассорти", price: "500 р.", emoji: "🍕", img: "images/мясная.jpg", desc: "Мясо, курица, колбаса, грибы." },
      { name: "Пицца Мясная", price: "500 р.", emoji: "🍕", img: "images/мясная.jpg", desc: "Мясо, сыр, помидор." },
      { name: "Пицца Куриная", price: "500 р.", emoji: "🍕", img: "images/куриная-пицца.jpg", desc: "Курица, сыр." },
      { name: "Пицца Куриная с грибами", price: "500 р.", emoji: "🍕", img: "images/куриная-с-грибами.jpg", desc: "Курица, грибы, сыр, помидор." },
      { name: "Пицца 4 сыра", price: "500 р.", emoji: "🧀", img: "images/4-сыра.jpg", desc: "Моцарелла, гауда, пармезан." },
      { name: "Пицца Пепперони", price: "500 р.", emoji: "🌶️", img: "images/пепперони.jpg", desc: "Колбаса, сыр." },
      { name: "Пицца Конструктор", price: "500 р.", emoji: "🍕", img: "images/конструктор.jpg", desc: "Две пиццы в одной — выберите две начинки." },
      { name: "Пицца Цезарь", price: "500 р.", emoji: "🥬", img: "images/пицца-цезарь.jpg", desc: "Салат, курица, сыр пармезан." },
      { name: "Пицца Сицилийская", price: "500 р.", emoji: "🌶️", img: "images/сицилийская.jpg", desc: "Курица, сыр, колбаса, оливки, острый перец." },
      { name: "Пицца Маргарита", price: "500 р.", emoji: "🍅", img: "images/маргарита.jpg", desc: "Помидор, сыр." },
      { name: "Пицца Грибная", price: "500 р.", emoji: "🍄", img: "images/грибная.jpg", desc: "Грибы, сыр." },
      { name: "Пицца Ойси", price: "750 р.", emoji: "🍣", img: "images/пицца-ойси.jpg", desc: "Креветка, лосось, икра, творожный сыр, унаги, спайси." },
      { name: "Пицца Конструктор с Ойси", price: "650 р.", emoji: "🍣", img: "images/конструктор-с-ойси.jpg", desc: "Креветка, лосось, икра, творожный сыр, унаги, спайси. (половина ойси, другая на выбор)" },
      { name: "Пицца Мексиканская", price: "500 р.", emoji: "🌮", img: "images/мексиканская.jpg", desc: "Острая пицца в мексиканском стиле." },
      { name: "Пицца Жульен", price: "650 р.", emoji: "🍄", img: "images/жульен.jpg", desc: "Курица, грибы, сливочный соус, сыр." },
      { name: "Пицца Барбекю", price: "500 р.", emoji: "🍖", img: "images/барбекю.jpg", desc: "Мясо, сыр, соус барбекю." }
    ]
  },
  "Сэты": {
    subtitle: "Наборы роллов на компанию",
    items: [
      { name: "Сэт 5 порций", price: "1950 р.", emoji: "🍱", img: "images/сэт-5-порций.jpg", desc: "2 Цезаря, Шик, Ойси, запечённый ролл." },
      { name: "Сэт 7 порций", price: "2300 р.", emoji: "🍱", img: "images/сэт-5-порций.jpg", desc: "2 Цезаря, 2 Шик, запечённый Цезарь, 2 Ойси." },
      { name: "Холодный сэт 5 порций", price: "2200 р.", emoji: "🍱", img: "images/холодный-сэт.jpg", desc: "Филадельфия, Ойси, Бакинский вечер, Бешеный лосось, Стамбульская ночь." },
      { name: "Гавайский сэт 9 порций", price: "2600 р.", emoji: "🍱", img: "images/гавайский-сэт.jpg", desc: "2 Шика, 2 Ойси, запечённый ролл, Стамбульская ночь, Бакинский вечер." },
      { name: "Холодный сэт 10 порций", price: "2200 р.", emoji: "🍱", img: "images/гавайский-сэт.jpg", desc: "Филадельфия, Ойси, Бакинский вечер, Бешеный лосось, Стамбульская ночь." }
    ]
  },
  "Горячие роллы": {
    subtitle: "Подаются запечёнными, порция 8 шт.",
    items: [
      { name: "Цезарь с курицей", price: "350 р.", emoji: "🍣", img: "images/цезарь-с-курицей-ролл.jpg", desc: "Запечённый ролл с курицей и соусом цезарь." },
      { name: "Цезарь с креветкой", price: "400 р.", emoji: "🍤", img: "images/цезарь-с-курицей-ролл.jpg", desc: "Запечённый ролл с креветкой и соусом цезарь." },
      { name: "Цезарь запечёный", price: "350 р.", emoji: "🍣", img: "images/запеченный-ролл-курица.jpg", desc: "Классический запечённый цезарь-ролл с кунжутом и соусом." },
      { name: "Запечённый Цезарь с креветкой", price: "400 р.", emoji: "🍣", img: "images/запеченный-ролл-курица.jpg", desc: "Запечённый ролл с креветкой, кунжутом и соусом." },
      { name: "Шик с курицей", price: "400 р.", emoji: "🍣", img: "images/шик-с-курицей.jpg", desc: "Запечённый ролл с курицей." },
      { name: "Шик с лососем", price: "450 р.", emoji: "🐟", img: "images/шик-с-курицей.jpg", desc: "Запечённый ролл с лососем." },
      { name: "Шик с креветкой", price: "450 р.", emoji: "🍤", img: "images/шик-с-курицей.jpg", desc: "Запечённый ролл с креветкой." },
      { name: "Шик с картошкой фри", price: "500 р.", emoji: "🍟", img: "images/шик-картофель-фри.jpg", desc: "Запечённый ролл с хрустящей картошкой фри." },
      { name: "Шик с картошкой по деревенски", price: "500 р.", emoji: "🥔", img: "images/шик-картошка-по-деревенски.jpg", desc: "Запечённый ролл с картошкой по-деревенски." },
      { name: "Суши сендвич", price: "400 р.", emoji: "🍙", img: "images/суши-сендвич.jpg", desc: "Сытный суши-сэндвич с курицей." }
    ]
  },
  "Холодные роллы": {
    subtitle: "Классика без запекания",
    items: [
      { name: "Ойси", price: "450 р.", emoji: "🍣",img: "images/ойси.jpg", desc: "Ролл с креветкой, лососем и икрой." },
      { name: "Калифорния с креветкой", price: "450 р.", emoji: "🍤", img: "images/калифорния-с-лососем.jpg", desc: "Классическая калифорния с креветкой." },
      { name: "Калифорния с лососем", price: "450 р.", emoji: "🐟", img: "images/калифорния-с-лососем.jpg", desc: "Классическая калифорния с лососем." },
      { name: "Бакинская ночь", price: "450 р.", emoji: "🍣", img: "images/бакинская-ночь.jpg", desc: "Фирменный холодный ролл." },
      { name: "Стамбульский вечер", price: "450 р.", emoji: "🍣", img: "images/стамбульский-вечер.jpg", desc: "Фирменный холодный ролл." },
      { name: "Классическая Филадельфия", price: "500 р.", emoji: "🍣", img: "images/филадельфия.jpg", desc: "Лосось, крем-сыр, огурец, рис." },
      { name: "Бешеный лосось", price: "450 р.", emoji: "🐟", img: "images/бешеный-лосось.jpg", desc: "Фирменный ролл с лососем." },
      { name: "Нори маки с креветкой", price: "350 р.", emoji: "🍤", img: "images/нори-маки-креветка.jpg", desc: "Маки в нори с креветкой." },
      { name: "Нори маки с лососем", price: "350 р.", emoji: "🐟", img: "images/нори-маки-лосось.jpg", desc: "Маки в нори с лососем." }
    ]
  },
  "Напитки": {
    subtitle: "Освежающие коктейли",
    items: [
      { name: "Голубая лагуна", price: "300 р.", emoji: "🥤", img: "images/голубая-лагуна.jpg", desc: "Освежающий безалкогольный коктейль." },
    ]
  },
  "Салаты": {
    subtitle: "Свежие салаты",
    items: [
      { name: "Цезарь", price: "350 р.", emoji: "🥗", img: "images/салат-цезарь.jpg", desc: "Салат, курица, пармезан, соус цезарь, гренки." },
    ]
  },
  "Фаст фуд": {
    subtitle: "Быстрые закуски",
    items: [
      { name: "Твистер", price: "270 р.", emoji: "🌯", img: "images/твистер.jpg", desc: "Лаваш с курицей, овощами и соусом." },
      { name: "Картофель фри", price: "200 р.", emoji: "🍟", img: "images/картофель-фри.jpg", desc: "Классический картофель фри." },
      { name: "Картофель по деревенски", price: "200 р.", emoji: "🥔", img: "images/картофель-по-деревенски.jpg", desc: "Картофель по-деревенски со специями." },
      { name: "Наггетсы", price: "250 р.", emoji: "🍗", img: "images/наггетсы.jpg", desc: "Хрустящие куриные наггетсы." },
      { name: "Соус", price: "40 р.", emoji: "🥫", desc: "Соус на выбор." }
    ]
  },
  "Чай": {
    subtitle: "Чайная карта",
    items: [
      { name: "Зелёный чай", price: "250 р.", emoji: "🍵", img: "images/зеленый-чай.jpg", desc: "Классический зелёный чай." },
      { name: "Чёрный чай", price: "250 р.", emoji: "🍵", img: "images/черный-чай.jpg", desc: "Классический чёрный чай." },
      { name: "Фруктовый чай", price: "250 р.", emoji: "🍵", img: "images/фруктовый-чай.jpg", desc: "Ароматный чай с фруктами." },
      { name: "Горский чай", price: "250 р.", emoji: "🍵", img: "images/горский-чай.jpg", desc: "Травяной сбор." },
      { name: "Чай успокаивающий", price: "250 р.", emoji: "🍵", img: "images/успокаивающий-чай.jpeg", desc: "Травяной сбор для отдыха." },

    ]
  },
  "Горячие блюда": {
    subtitle: "Фурай",
    items: [
      { name: "Фурай с фри", price: "400 р.", emoji: "🍗", img: "images/фурай-с-фри.jpg", desc: "Фурай, подаётся с картошкой фри." },
      { name: "Фурай с рисом", price: "400 р.", emoji: "🍚", img: "images/фурай-с-рисом.jpg", desc: "Фурай, подаётся с рисом." }
    ]
  }
};

/* ---------- 1b. Contact & social info ----------
   Edit these with your real details — they populate the Contacts page. */
const CONTACT_INFO = {
  address: "г. Кизилюрт, ул. Гагарина, 36", 
  hours: "Ежедневно 10:00 – 23:00",       
  phoneDisplay: "+7 928 671-05-31",      
  phoneDigits: "79286710531",             
  instagram: "https://www.instagram.com/bergamo__cafe/",    
  yandexMaps: "https://yandex.ru/maps/org/bergamo/238132060464/?ll=46.866546%2C43.201318&z=16"
};

/* ---------- 2. DOM references ---------- */
const grid = document.getElementById('cat-grid');
const preview = document.getElementById('preview-sections');
const home = document.getElementById('home');
const catview = document.getElementById('catview');
const detail = document.getElementById('detail');
const backbar = document.getElementById('backbar');
const backbarLabel = document.getElementById('backbar-label');
const cartview = document.getElementById('cartview');
const orderBar = document.getElementById('order-bar');
const contactsview = document.getElementById('contactsview');
const scrollTopBtn = document.getElementById('scroll-top-btn');

let currentCat = null;
let currentDetailItem = null; // { cat, item } currently open in the detail view

// Cart: keyed by "category|||dish name" -> { cat, item, qty }
const cart = {};

function cartKey(cat, item){
  return `${cat}|||${item.name}`;
}

function priceToNumber(priceStr){
  const digits = priceStr.replace(/[^\d]/g, '');
  return digits ? parseInt(digits, 10) : 0;
}

/* ---------- 3. Rendering helpers ---------- */

// One dish card: image placeholder + name + price + qty stepper
function makeCard(cat, item){
  const card = document.createElement('div');
  card.className = 'item-card';
  card.onclick = () => openDetail(cat, item);

  card.innerHTML = `
    <div class="plate">${platePicture(item)}</div>
    <div class="item-info">
      <div class="item-name">${item.name}</div>
      <div class="item-price">${item.price}</div>
      <div class="qty-stepper" data-key="${cartKey(cat, item)}"></div>
    </div>
  `;

  renderQtyStepper(card.querySelector('.qty-stepper'), cat, item);
  return card;
}

// Renders either a single "+" button (qty 0) or a "- N +" stepper
function renderQtyStepper(el, cat, item, big){
  if (!el) return;
  const key = cartKey(cat, item);
  const qty = cart[key] ? cart[key].qty : 0;
  el.innerHTML = '';

  const stopClick = (fn) => (e) => { e.stopPropagation(); fn(); };

  if (qty === 0){
    const addBtn = document.createElement('button');
    addBtn.className = 'qty-add';
    addBtn.textContent = big ? '+ Добавить в заказ' : '+ Добавить';
    addBtn.onclick = stopClick(() => changeQty(cat, item, 1));
    el.appendChild(addBtn);
    return;
  }

  const minus = document.createElement('button');
  minus.className = 'qty-btn';
  minus.textContent = '−';
  minus.onclick = stopClick(() => changeQty(cat, item, -1));

  const count = document.createElement('span');
  count.className = 'qty-count';
  count.textContent = qty;

  const plus = document.createElement('button');
  plus.className = 'qty-btn';
  plus.textContent = '+';
  plus.onclick = stopClick(() => changeQty(cat, item, 1));

  el.append(minus, count, plus);
}

// Renders a real photo if item.img is set, otherwise the emoji placeholder
function platePicture(item){
  if (item.img) {
    return `<img src="${item.img}" alt="${item.name}" loading="lazy" decoding="async">`;
  }
  return item.emoji || '';
}

// Category button in the top grid
function makeCategoryButton(cat){
  const btn = document.createElement('button');
  btn.className = 'cat-btn';
  btn.textContent = cat;
  btn.onclick = () => openCategory(cat);
  return btn;
}

// A full preview section on the home screen (heading + item grid)
function makePreviewSection(cat, data){
  const wrap = document.createElement('div');

  const heading = document.createElement('h2');
  heading.className = 'section-title';
  heading.textContent = cat;
  wrap.appendChild(heading);

  const itemsGrid = document.createElement('div');
  itemsGrid.className = 'item-grid';
  data.items.forEach(item => itemsGrid.appendChild(makeCard(cat, item)));
  wrap.appendChild(itemsGrid);

  return wrap;
}

function renderHome(){
  Object.keys(MENU).forEach(cat => {
    grid.appendChild(makeCategoryButton(cat));
    preview.appendChild(makePreviewSection(cat, MENU[cat]));
  });
}

/* ---------- 4. Navigation ---------- */

// Hides every full-screen view; each nav function then shows the one it needs
function hideAllViews(){
  catview.classList.remove('show');
  detail.classList.remove('show');
  cartview.classList.remove('show');
  contactsview.classList.remove('show');
}

function openCategory(cat){
  currentCat = cat;
  const data = MENU[cat];

  document.getElementById('cat-title').textContent = cat;
  document.getElementById('cat-sub').textContent = data.subtitle || '';

  const itemsWrap = document.getElementById('cat-items');
  itemsWrap.innerHTML = '';
  data.items.forEach(item => itemsWrap.appendChild(makeCard(cat, item)));

  home.classList.add('hide');
  hideAllViews();
  catview.classList.add('show');
  backbar.classList.add('show');
  backbarLabel.textContent = 'Меню';
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

function openDetail(cat, item){
  document.getElementById('detail-emoji').innerHTML = platePicture(item);
  document.getElementById('detail-name').textContent = item.name;
  document.getElementById('detail-price').textContent = item.price;
  document.getElementById('detail-desc').textContent = item.desc;
  currentDetailItem = { cat, item };

  const note = document.getElementById('detail-note');
  if (item.note) {
    note.style.display = 'block';
    note.textContent = item.note;
  } else {
    note.style.display = 'none';
  }

  renderQtyStepper(document.getElementById('detail-add'), cat, item, true);

  home.classList.add('hide');
  hideAllViews();
  detail.classList.add('show');
  backbar.classList.add('show');
  backbarLabel.textContent = cat;
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

function openCart(){
  renderCartView();
  home.classList.add('hide');
  hideAllViews();
  cartview.classList.add('show');
  backbar.classList.add('show');
  backbarLabel.textContent = 'Меню';
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

function openContacts(){
  home.classList.add('hide');
  hideAllViews();
  contactsview.classList.add('show');
  backbar.classList.add('show');
  backbarLabel.textContent = 'Меню';
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

function goHome(){
  // From the cart or contacts, go back to wherever the person was (category or home)
  if (cartview.classList.contains('show') || contactsview.classList.contains('show')) {
    hideAllViews();
    if (currentCat) {
      catview.classList.add('show');
      backbarLabel.textContent = 'Меню';
    } else {
      home.classList.remove('hide');
      backbar.classList.remove('show');
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
    return;
  }

  // From a dish detail, go back to its category list rather than all the way home
  if (detail.classList.contains('show') && currentCat) {
    detail.classList.remove('show');
    catview.classList.add('show');
    backbarLabel.textContent = 'Меню';
    return;
  }

  home.classList.remove('hide');
  hideAllViews();
  backbar.classList.remove('show');
  currentCat = null;
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

/* ---------- 5. Cart & WhatsApp order ---------- */

function changeQty(cat, item, delta){
  const key = cartKey(cat, item);
  const current = cart[key] ? cart[key].qty : 0;
  const next = Math.max(0, current + delta);

  if (next === 0) {
    delete cart[key];
  } else {
    cart[key] = { cat, item, qty: next };
  }

  // Refresh every stepper showing this dish (home preview + category list can both show it)
  document.querySelectorAll(`.qty-stepper[data-key="${CSS.escape(key)}"]`)
    .forEach(el => renderQtyStepper(el, cat, item));

  // Refresh the detail-view stepper if this dish is currently open
  if (currentDetailItem && cartKey(currentDetailItem.cat, currentDetailItem.item) === key) {
    renderQtyStepper(document.getElementById('detail-add'), cat, item, true);
  }

  updateOrderBar();
  if (cartview.classList.contains('show')) renderCartView();
}

function cartEntries(){
  return Object.values(cart).sort((a, b) => a.item.name.localeCompare(b.item.name, 'ru'));
}

function cartTotal(){
  return cartEntries().reduce((sum, e) => sum + priceToNumber(e.item.price) * e.qty, 0);
}

function cartCount(){
  return cartEntries().reduce((sum, e) => sum + e.qty, 0);
}

function updateOrderBar(){
  const count = cartCount();
  if (count === 0) {
    orderBar.classList.remove('show');
    return;
  }
  orderBar.classList.add('show');
  const noun = count % 10 === 1 && count % 100 !== 11 ? 'позиция'
    : [2,3,4].includes(count % 10) && ![12,13,14].includes(count % 100) ? 'позиции'
    : 'позиций';
  document.getElementById('order-bar-count').textContent = `${count} ${noun}`;
  document.getElementById('order-bar-total').textContent = `${cartTotal()} р.`;
}

function renderCartView(){
  const wrap = document.getElementById('cart-items');
  const empty = document.getElementById('cart-empty');
  const summary = document.getElementById('cart-summary');
  wrap.innerHTML = '';

  const entries = cartEntries();
  if (entries.length === 0) {
    empty.style.display = 'block';
    summary.style.display = 'none';
    return;
  }
  empty.style.display = 'none';
  summary.style.display = 'block';

  entries.forEach(({ cat, item, qty }) => {
    const row = document.createElement('div');
    row.className = 'cart-item';
    row.innerHTML = `
      <div class="cart-item-plate">${platePicture(item)}</div>
      <div class="cart-item-info">
        <div class="cart-item-name">${item.name}</div>
        <div class="cart-item-price">${item.price} × ${qty}</div>
      </div>
      <div class="qty-stepper" data-key="${cartKey(cat, item)}"></div>
    `;
    renderQtyStepper(row.querySelector('.qty-stepper'), cat, item);
    wrap.appendChild(row);
  });

  document.getElementById('cart-total').textContent = `${cartTotal()} р.`;
}

function sendOrderToWhatsApp(){
  const entries = cartEntries();
  if (entries.length === 0) return;

  const lines = entries.map(({ item, qty }) => `— ${item.name} × ${qty} — ${priceToNumber(item.price) * qty} р.`);
  const text = [
    'Здравствуйте! Хочу сделать заказ в Bergamo:',
    '',
    ...lines,
    '',
    `Итого: ${cartTotal()} р.`
  ].join('\n');

  const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`;
  window.open(url, '_blank');
}

/* ---------- 6. Contacts page ---------- */

function renderContacts(){
  document.getElementById('contact-address').textContent = CONTACT_INFO.address;
  document.getElementById('contact-hours').textContent = CONTACT_INFO.hours;

  const phoneLink = document.getElementById('contact-phone');
  phoneLink.textContent = CONTACT_INFO.phoneDisplay;
  phoneLink.href = `tel:+${CONTACT_INFO.phoneDigits}`;

  document.getElementById('contact-whatsapp').href =
    `https://wa.me/${CONTACT_INFO.phoneDigits}`;
  document.getElementById('contact-instagram').href = CONTACT_INFO.instagram;
  document.getElementById('contact-map').href = CONTACT_INFO.yandexMaps;
}

/* ---------- 7. Scroll-to-top button ---------- */

function scrollToTop(){
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

window.addEventListener('scroll', () => {
  if (window.scrollY > 320) {
    scrollTopBtn.classList.add('show');
  } else {
    scrollTopBtn.classList.remove('show');
  }
});

renderHome();
renderContacts();
