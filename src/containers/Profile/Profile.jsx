import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux'

import { load_profile_list } from '../../actions/accounts/profile'


const Profile = ({
            load_profile_list,
            p_username_global,
        }) => {
    const [formData, setFormData] = useState({
        p_username: '',
    })

    const { p_username } = formData

    return (
        <div>
            <div>Profiles</div>
            <div>
                {p_username}
            </div>
        </div>
    )
}

const mapStateToProps = (state) => ({
    p_username_global: state.profile.p_username
})

export default connect(mapStateToProps, {load_profile_list})(Profile)