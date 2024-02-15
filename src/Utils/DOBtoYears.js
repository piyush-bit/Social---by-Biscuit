function calculateAge(dob) {
    // Convert string to Date object
    const dobDate = new Date(dob);

    // Get current date
    const currentDate = new Date();

    // Calculate age
    let age = currentDate.getFullYear() - dobDate.getFullYear();

    // Adjust age if birthday hasn't occurred yet this year
    if (currentDate.getMonth() < dobDate.getMonth() || (currentDate.getMonth() === dobDate.getMonth() && currentDate.getDate() < dobDate.getDate())) {
        age--;
    }

    return age;
}

export default calculateAge;