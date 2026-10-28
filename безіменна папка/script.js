const orderBtn = document.getElementById('orderBtn');
const modal = document.getElementById('modal');
const closeBtn = document.getElementById('closeBtn');
const orderForm = document.getElementById('orderForm');

// Открыть модальное окно при клике на кнопку
orderBtn.addEventListener('click', () => {
    modal.style.display = 'flex';
});

// Закрыть окно при клике на крестик
closeBtn.addEventListener('click', () => {
    modal.style.display = 'none';
});

// Закрыть окно при клике вне его области
window.addEventListener('click', (e) => {
    if (e.target === modal) {
        modal.style.display = 'none';
    }
});

// Обработка отправки формы
orderForm.addEventListener('submit', (e) => {
    e.preventDefault();
    
    const weight = document.getElementById('weight').value;
    const height = document.getElementById('height').value;
    const width = document.getElementById('width').value;

    alert(`Спасибо за заказ!\nВведенные параметры:\n- Вес: ${weight} кг\n- Высота: ${height} см\n- Ширина: ${width} см`);
    
    modal.style.display = 'none';
    orderForm.reset();
});