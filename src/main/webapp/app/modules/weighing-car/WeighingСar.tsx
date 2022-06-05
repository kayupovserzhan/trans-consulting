import React from 'react';
import './weighing-car.scss';

const WeighingCar = () => {
  return (
    <>
      <section className="weighing-car-main-section">
        <div className="container  ">
          <div className="row">
            <div className="col-sm main-title">Взвешивание автомобиля и сопровождение погрузки с выездом</div>
          </div>
          <div className="row">
            <div className="col-sm main-description">
              Проверка весовых параметров вашего ТС после погрузки посредством взвешивания каждой оси на мобильных весах..
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="container">
          <div className="row">
            <div className="col-sm">
              <div className="main-text">
                <p>
                  Правильно размещенный и закрепленный груз является гарантом безопасной перевозки и обеспечением экономии на дорожных
                  сборах. Благодаря предрейсовому взвешиванию возможно точно определить фактическую нагрузку на оси и понять возможные
                  превышения по весовым параметрам и основываясь на данной информации правильно распределить груз на платформу прицепа.
                  Сопровождение погрузки груза обеспечит соблюбение всех параметров указанных в «Проектированиие погрузки» (сделать в виде
                  ссылки кликабельным, чтобы отправить на страницу данной услуги). Поосное взвешивание обеспечит контрольную проверку
                  указанных в «Проектированиие погрузки» осевых нагрузок. В случае выявлении не соответствии провести регулировки суммы
                  превышения.
                </p>
                <p>Порядок осуществления:</p>
                <ol>
                  <li>
                    Заказчиком отправляется данные груза для «Подбора транспорта и проектирования погрузочного процесса» (сделать в виде
                    ссылки кликабельным, чтобы отправить на страницу данной услуги);
                  </li>
                  <li>Подписывается договор на «Подбора транспорта и проектирования погрузочного процесса»;</li>
                  <li>Устанавливается точные сроки погрузки и выезда мобильного комплекса для взвешивания;</li>
                  <li>
                    Производится расчет стоимости и подписывается договор на «Взвешивание автомобиля и сопровождение погрузки с выездом»;
                  </li>
                  <li>Осуществляется выезд инженера с мобильным комплексом для осуществления заказа;</li>
                  <li>
                    По завершению составляется акт взвешивания с фактическим размещением и установкой разметок расположения груза на
                    транспорте;
                  </li>
                  <li>Полученные данные будут использования для получения спецразрешения.</li>
                </ol>
                <p>
                  Обеспечив дорогостоящую перевозку взвешиванием и сопровождением погрузки, вы минимизируете вероятность риска технических
                  происшествии, а также сможете максимально сэкономить затраты на перевозку.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default WeighingCar;
