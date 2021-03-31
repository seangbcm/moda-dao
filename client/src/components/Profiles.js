import Profile from "./Profile";

const Profiles = ({ profiles }) => {
    console.log(profiles);
    const _profiles = profiles.map((profile) =>
        <Profile profile={profile}></Profile>
    );

    return _profiles;
};

export default Profiles;
