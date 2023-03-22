import { useState, useEffect } from "react";
import { useCreateRoadmap, useGetRoadmaps } from "../../hooks";
import { StandardInput, StandardButton, StandardDropdown } from "./../";
import styles from "./styles.module.css";

const visibilityOptions = {
    type: 'standard',
    allowMultipleValues: false,
    options: [
        { id: 0, value:'private', label: 'Private' },
        { id: 1, value:'public', label: 'Public' },
        { id: 2, value:'shared', label: 'Shared' },
    ]
};

const StandardModal = ({ openSetter, contentType = 'add roadmap', setter = () => {} }) => {
	const { createRoadmapHandler } = useCreateRoadmap();
	const { data, fetchData } = useGetRoadmaps();
	const [title, setTitle] = useState("");
	const [description, setDescription] = useState("");

	// This is for the visibility options
	const [visibilityOpen, setVisibilityOpen] = useState(false);
	const [visibilityValue, setVisibilityValue] = useState('private');

	const openVisibilityMenu = () => {
        setVisibilityOpen(!visibilityOpen);
    }

    const selectVisibility = (v) => {
        setVisibilityValue(v);
        setVisibilityOpen(false);
    }

	const addRoadmap = async () => {
		const roadmap = {
			title: title,
			description: description,
			start_date: "2022-01-01",
			end_date: "2022-12-31",
			visibility: "private",
			status: "in progress",
			owner: 1,
		};

		const res = await createRoadmapHandler(roadmap);
		setter(res);
		openSetter();
	}

	const modalContent = () => {
		if (contentType === 'add roadmap'){
			return (
				<>
					<div className={styles.sm_title}>New Roadmap</div>
					<div className={styles.sm_input}>
						<StandardInput placeholder="Roadmap Title" setter={setTitle}  />
					</div>
					<div className={styles.sm_input}>
						<StandardInput placeholder="Roadmap Short Description" setter={setDescription}  />
					</div>
					<div className={styles.sm_button_container}>
						<div className={styles.sm_cancel}>
							<StandardButton label={'Cancel'} color="white" clickHandler={openSetter} />
						</div>
						<div className={styles.sm_create}>
							<StandardButton label={'Create roadmap'} color="blue" clickHandler={addRoadmap} />
						</div>
					</div>
				</>	
			)
		}

		if (contentType === 'delete roadmap'){}

		if (contentType === 'add event'){
			return (
				<>
					<div className={styles.sm_title}>Add Category</div>
					<div className={styles.sm_input}>
						<StandardInput placeholder="Category name (mandatory)" setter={() => {}}  />
					</div>
					<div className={styles.sm_input}>
						<StandardInput placeholder="Category description (mandatory)" setter={() => {}}  />
					</div>
					<div className={styles.sm_input}>
						<StandardInput placeholder="Start date (mandatory)" setter={() => {}}  />
					</div>
					<div className={styles.sm_input}>
						<StandardInput placeholder="End date (mandatory)" setter={() => {}}  />
					</div>
					<div className={styles.sm_button_container}>
						<div className={styles.sm_cancel}>
							<StandardButton label={'Cancel'} color="white" clickHandler={openSetter} />
						</div>
						<div className={styles.sm_create}>
							<StandardButton label={'Save'} color="blue" clickHandler={() => {}} />
						</div>
					</div>
				</>	
			)
		}

		if (contentType === 'add collaborator'){
			return (
				<>
					<div className={styles.sm_title}>Add Collaborator</div>
					<div className={styles.sm_input}>
						<StandardInput placeholder="Name" setter={() => {}} />
					</div>
					<div className={styles.sm_input}>
						<StandardInput placeholder="Email" setter={() => {}} />
					</div>
					<div className={styles.sm_input}>
						<StandardDropdown 
							label={<div style={{ textTransform: 'capitalize' }}>{visibilityValue}</div>} 
							color="white"
							multi={false} 
							openSetter={openVisibilityMenu} 
							open={visibilityOpen} 
							menu={visibilityOptions} 
							value={visibilityValue} 
							valueSetter={selectVisibility} 
						/>
					</div>
					<div className={styles.sm_button_container}>
						<div className={styles.sm_cancel}>
							<StandardButton label={'Cancel'} color="white" clickHandler={openSetter} />
						</div>
						<div className={styles.sm_create}>
							<StandardButton label={'Create roadmap'} color="blue" clickHandler={() => {}} />
						</div>
					</div>
				</>	
			)
		}
	}

	// setting up close modal by escape
	useEffect(() => {
		function onEscapeClose(event) {
			if (event.keyCode === 27) {
				openSetter();
			}
		}

		document.body.style.overflow = "hidden";
		document.addEventListener("keydown", onEscapeClose);

		return () => {
			document.body.style.overflow = "visible";
			document.removeEventListener("keydown", onEscapeClose);
		};
	});

	return (
		<div className={styles.sm_backdrop}>
			<div className={styles.sm_container}>
				{modalContent()}
			</div>
		</div>
	);
};

export default StandardModal;
