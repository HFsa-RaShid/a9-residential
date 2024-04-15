
import 'animate.css';
import { Helmet } from 'react-helmet';
const LoanForm = () => {
    return (
        <div className="hero  bg-base-200 ">
            <Helmet>
                <title>Apply Loan- Sweet Home</title>
            </Helmet>
            <div className="hero-content flex-col  w-[400px] animate__animated animate__zoomIn">
            <h1 className="text-4xl font-bold ">Apply for Loan!</h1>
                    <div className="card shrink-0  w-full max-w-sm  shadow-2xl bg-base-100">
                    
                    <form className="card-body">
                        <div className="form-control">
                        <label className="label">
                            <span className="label-text font-bold">Name</span>
                        </label>
                        <input type="text" name="name" placeholder="Your Name" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                        <label className="label">
                            <span className="label-text font-bold">Phone Number</span>
                        </label>
                        <input type="text" name="" placeholder="Your Phone Number" className="input input-bordered" required />
                        </div>

                        <div className="form-control">
                        <label className="label">
                            <span className="label-text font-bold">Email</span>
                        </label>
                        <input type="email" placeholder="Your Email" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                        <label className="label">
                            <span className="label-text font-bold">Property ID</span>
                        </label>
                        <input type="text" placeholder="Property ID" className="input input-bordered" required />

                        </div>
                        <div className="form-control mt-2">
                        <button className="btn bg-black text-white font-bold">Apply</button>
                        </div>
                    </form>
                    </div>
            </div>
        </div>
    );
};

export default LoanForm;