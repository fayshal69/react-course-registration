import PropTypes from 'prop-types';


const Cart = ({courses, totalCredit }) => {
    const credits = courses.reduce((p, c) => p + c.credit, 0);
    return (
        <div className='w-1/5'>
            <div className='shadow-lg p-5 rounded-lg'>
                <div>
                    <h3 className='text-xl font-semibold'>
                    Credit hour remaining { totalCredit -  credits} hr</h3>
                </div>
                <div className='divider'></div>
                <div>
                    <h3 className='text-xl font-semibold mb-3'>Course Name</h3>
                    {
                        courses.map((course, idx) => <p key={course.id}>{idx + 1}. {course.name}</p>)
                    }
                </div>
                <div className='divider'></div>
                <div>
                    <h3 className='text-xl font-semibold'>Total credit hour: {credits} hr</h3>
                </div>
                <div className='divider'></div>
                <div>
                    <h3 className='text-xl font-semibold'>Totoal Price: {courses.reduce((p, c) => p + c.price, 0)}$</h3>
                </div>
            </div>
        </div>
    );
};

Cart.propTypes = {
    courses: PropTypes.array.isRequired,
    totalCredit: PropTypes.number.isRequired,
};

export default Cart;