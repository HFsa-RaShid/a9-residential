

const UpdateProfile = () => {
    return (
        <div>
            <h1>Update Your Profile!!!</h1>
            <form>
            <div className="form-control">
                <label className="label">
                    <span className="label-text font-bold text-white">Name</span>
                </label>
                <input type="text" name="name" placeholder="Your Name" className="input input-bordered" required />
                </div>
                <div className="form-control">
                <label className="label">
                    <span className="label-text font-bold text-white">Photo URL</span>
                </label>
                <input type="text" name="photoUrl" placeholder="Enter Photo URL" className="input input-bordered" required />
                </div>

            </form>
            
            
        </div>
    );
};

export default UpdateProfile;