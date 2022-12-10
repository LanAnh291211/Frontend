import React from 'react';
import './_teacherComponent.scss';

const TeacherComponent = (props)=>{
    const { username, name, department, courseAssigned } = props;
    return(
        <div className="teacherMainDiv">
            <div className="teacherMainContainer">
                <div className="teacherData">
                    <header>
                        <h2>
                            {name}<span>({username})</span>
                        </h2>

                    </header>
                    <div className="teacherBody">
                        <p>
                            Khóa đang giảng dạy : <span>{courseAssigned}</span>
                        </p>
                        <p>
                            Bộ phận : <span>{department}</span>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default TeacherComponent;