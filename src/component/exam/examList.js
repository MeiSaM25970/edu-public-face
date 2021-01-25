import React, { useEffect, useState } from "react";
import { Exam } from "./exam";
import * as service from "../../service";
export function ExamList(props) {
  const [state, setState] = useState({});
  const fetchTeachers = () => {
    service
      .getAllTeacher()
      .then((res) => setState({ ...state, teachers: res.data }))
      .catch((err) => console.log(err));
  };
  useEffect(fetchTeachers, []);
  const exams = props.exams;
  if (!exams) {
    return (
      <div
        className="text-primary spinner-border mx-auto mt-5 d-block"
        role="status"
      ></div>
    );
  } else {
    return (
      <div className="row ">
        <div className=" text-center tutorials popular ir-r mt-100">
          {exams && state.teachers ? (
            exams.data.map((exam, index) => {
              const teacher = state.teachers.find(
                (teacher) => teacher._id === exam.teacher
              );
              if (exam.isEnabled) {
                return <Exam key={index} exam={exam} teacher={teacher} />;
              } else return undefined;
            })
          ) : (
            <span className="sr-only">آزمونی وجود ندارد.</span>
          )}
        </div>
      </div>
    );
  }
}
