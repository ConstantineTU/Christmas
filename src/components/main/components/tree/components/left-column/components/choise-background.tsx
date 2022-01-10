import * as React from 'react';

type Props = {
  bg: Array<string>;
  index: number;
  bgChosen: {
    value: string;
    setValue: React.Dispatch<React.SetStateAction<string>>;
  };
};

export default function BgCard(props: Props) {
  const handleChange = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.currentTarget.classList.contains('active')) {
      e.currentTarget.classList.remove('active');
    } else {
      e.currentTarget.classList.add('active');
      props.bgChosen.setValue(`${String(e.currentTarget.dataset.src)}`);
    }
  };

  return (
    <div
      id={`bg-card${props.index}`}
      onClick={handleChange}
      data-src={String(props.bg[Number(`${props.index}`)])}
      className={props.bgChosen.value.includes(props.bg[Number(`${props.index}`)]) ? 'bg-card active' : 'bg-card'}
    >
      {
        <div className="bg-card__image-wrap">
          <div className="bg-card__image-container">
            <img
              src={String(props.bg[Number(`${props.index}`)])}
              alt="Изображение игрушки"
              className="bg-card__image"
            />
          </div>
        </div>
      }
    </div>
  );
}
