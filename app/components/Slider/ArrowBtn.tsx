import cx from 'classnames';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';

export const ArrowBtn = ({
    slideCount,
    currentSlide,
    className,
    ...props
}: any) => {
    return (
        <button className={cx('slider-move-btn', className)} {...props}>
            {className.includes('next') ? <FaArrowRight /> : <FaArrowLeft />}
        </button>
    );
};
