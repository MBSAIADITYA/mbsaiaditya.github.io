export const fetchProjects = async () => {
  try {
    const response = await fetch('/project-response.json');
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