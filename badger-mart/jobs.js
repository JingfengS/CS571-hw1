function submitApplication(e) {
    e.preventDefault(); // You can ignore this; prevents the default form submission!

    // TODO: Alert the user of the job that they applied for!
    const jobSelectedResults = document.getElementsByName('job');
    for (const jobOption of jobSelectedResults) {
        if (jobOption.checked) {
            const jobName = jobOption.value;
            alert(`Thank you for applying to be a ${jobName}!`);
            return;
        }
    }
    alert("Please select a job!");
}
