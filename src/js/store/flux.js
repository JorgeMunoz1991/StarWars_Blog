const getState = ({ getStore, getActions, setStore }) => {
	const base_url = "https://www.swapi.tech/api";
	return {
		store: {
			planets: [],
			starships: [],
			people: [],
			likedElements: []
		},
		actions: {
			
			getItem: async () => {
				try {
					const [peopleResponse, planetsResponse, starshipsResponse] = await Promise.all([
						fetch(`${base_url}/people`),
						fetch(`${base_url}/planets`),
						fetch(`${base_url}/starships`),
					]);
			
					const [peopleData, planetsData, starshipsData] = await Promise.all([
						peopleResponse.json(),
						planetsResponse.json(),
						starshipsResponse.json(),
					]);
			
					peopleData.results.map(item => {
						item.image = `https://starwars-visualguide.com/assets/img/characters/${item.uid}.jpg`;
					});
			
					planetsData.results.map(item => {
						item.image = `https://starwars-visualguide.com/assets/img/planets/${item.uid}.jpg`;
					});
			
					starshipsData.results.map(item => {
						item.image = `https://starwars-visualguide.com/assets/img/starships/${item.uid}.jpg`;
					});
			
					setStore({ people: peopleData.results, planets: planetsData.results, starships: starshipsData.results });
					console.log(getStore())
					localStorage.setItem('people', JSON.stringify(peopleData.results));
					localStorage.setItem('planets', JSON.stringify(planetsData.results));
					localStorage.setItem('starships', JSON.stringify(starshipsData.results));
				} catch (error) {
					console.error(error);
			
					if (error.response) {
						console.error('Response data:', error.response.data);
					}
				}
			},
			
			addLike: (likedObject) => {
				const store = getStore();
			
				let likedElements = JSON.parse(localStorage.getItem("likedElements")) || [];
			
				if (likedElements.some(item => item.name === likedObject.name)) {
					likedElements = likedElements.filter(element => element.name !== likedObject.name);
				} else {
					likedElements.push(likedObject);
				}
			
				localStorage.setItem('likedElements', JSON.stringify(likedElements));
				setStore(store);
			}
			
		}
	};
};

export default getState;