const calculateCGPA = () => {
    let totalGradePoints = 0;
    let totalCredits = 0;

    data.semesters.forEach((semester) => {
        semester.Sub_details.forEach((course) => {
            const gradePoint = GPAConverter(course.grade);
            const credits = course.credits;
            totalGradePoints += gradePoint * credits;
            totalCredits += credits;
        });
    });

    const cgpa = totalGradePoints / totalCredits;
    setCGPA(cgpa.toFixed(2)); // Rounded to two decimal places
};

return (
    <div>
        <h2>DASHBOARD</h2>
        {data.semesters.map((semester, semesterIndex) => (
            <div key={semester.semester}>
                {semester.Sub_details.map((course, courseIndex) => (
                    <div key={course.course_code}>
                        <p>Grade: {course.grade}</p>
                        <p>Credits: {course.credits}</p>
                    </div>
                ))}
            </div>
        ))}
        <button onClick={calculateCGPA}>Calculate CGPA</button>
        {cgpa && <p>CGPA: {cgpa}</p>}
    </div>
);

