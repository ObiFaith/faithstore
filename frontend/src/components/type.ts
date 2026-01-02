export type InputProps = {
  type: string;
  name: string;
  value?: string;
  className: string;
  placeholder: string;
};

export type BtnProps = {
  to?: string;
  btn?: string;
  text: string;
  leftIcon?: string;
  rightIcon?: string;
};

export type Settings = {
  dots: boolean;
  infinite: boolean;
  slidesToShow: number;
  slidesToScroll: number;
  autoplay: boolean;
  autoplaySpeed: number;
  pauseOnHover: boolean;
};

export type CartItemProps = {
  cartId: string;
  cartQuantity: number;
};

export type ModalChildProps = {
  isOpen: boolean;
  toggleModal: (e?: React.MouseEvent<HTMLElement, MouseEvent>) => void;
};
