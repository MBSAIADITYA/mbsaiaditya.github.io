export const fetchProjects = async () => {
  try {
    const response = await fetch('https://tetragram.codered.cloud/api/v2/pages/?type=projects.ProjectsPage&fields=*');
    console.log(response);

    if (!response.ok) {
      throw new Error(`API request failed with status: ${response.status}`);
    }

    const data = await response.json();
    return data.items || [];
  } catch (error) {
    console.error('Error fetching data from API:', error);
    return [];
  }
};