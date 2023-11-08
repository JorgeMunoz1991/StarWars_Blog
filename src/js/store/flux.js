const getState = ({ getStore, getActions, setStore }) => {
	const base_url = "https://www.swapi.tech/api";
	return {
		store: {
			planets: [],
			vehicles: [],
			people: [],
			likedElements: []
		},
		actions: {

			getItem: (endpoint) => {
				try {
					Promise.all([
						fetch(`${base_url}/${endpoint}`),
					]).then(responses => {
						return Promise.all(responses.map(res => res.json()));
					}).then(data => {
						data[0].results.map(item => {
							item.image = `https://starwars-visualguide.com/assets/img/${endpoint}/${item.uid}.jpg`;
						});
						if (endpoint == "people") {
							setStore({ people: data[0].results });
						}else if (endpoint == "planets") {
							setStore({ planets: data[1].results });
						}else if (endpoint == "vehicles") {
							setStore({ vehicles: data[2].results });
						}
						console.log(store.getItem)

						localStorage.setItem('people', JSON.stringify(data[0].results));
						localStorage.setItem('planets', JSON.stringify(data[1].results));
						localStorage.setItem('vehicles', JSON.stringify(data[2].results));

					});
				} catch (error) {
					console.error(error)
				}
			},
			addLike: (likedObject) => {
				const store = getStore();

				if (store.likedElements.some(item => item.uid === likedObject.uid)) {

					store.likedElements = store.likedElements.filter(element => element.uid !== likedObject.uid);
					localStorage.setItem('likedElements', JSON.stringify(store.likedElements));

					setStore(store);
					return;
				};

				store.likedElements.push(likedObject);
				localStorage.setItem('likedElements', JSON.stringify(store.likedElements));

				setStore(store);

			}
		}
	};
};

export default getState;
