import { useUserData } from "../../../../hooks/UserData";
import "./UpdatePassword.scss";
import { useState } from "react";
import { apiRequest } from "../../../utils/api";
import { FaEyeSlash } from "react-icons/fa";
import { IoEyeSharp } from "react-icons/io5";

interface IPropsPatchPassword {
	pseudo: string;
	email: string;
	password: string;
}

const UpdatePassword = () => {
	const { user } = useUserData();

	const inputPseudo = user?.pseudo;
    const inputEmail = user?.email;
    const [inputPassword, setInputPassword] = useState(user?.password);
    const [inputNewPassword, setInputNewPassword] = useState("");
    const [inputNewPasswordValidation, setInputNewPasswordValidation] = useState("");

	const [dataPatch, setDataPatch] = useState<IPropsPatchPassword>();

	const patchUpdatePassword = async (data: IPropsPatchPassword) => {
		try {
			const patchProfil = await apiRequest("/users/patch", "PATCH", data);
			console.log(patchProfil);
		} catch (error) {
			console.error(error);
		}
	};

	const handleUpdatePassword = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();

		const myFormData = new FormData(e.currentTarget);
		if (!user) return;
		const newUser = {
			pseudo: inputPseudo,
			email: inputEmail,
			password: myFormData.get("NewPassword") as string,
		};

		setDataPatch(newUser);
	};


	return (
		<div className="updatePassword">
			<form
				action=""
				className="updatePassword__form"
				onSubmit={handleUpdatePassword}
			>
				<label htmlFor="Firstname">Mot de passe</label>
				<input
					type="text"
					name="Password"
					id="Password"
					value={inputPassword}
					onChange={(e) => setInputPassword(e.target.value)}
				/>

				<label htmlFor="Lastname">Nouveau mot de passe</label>
				<input
					type="text"
					name="NewPassword"
					id="NewPassword"
					value={inputNewPassword}
					onChange={(e) => setInputNewPassword(e.target.value)}
				/>

				<label htmlFor="Pseudo">Confirmation du nouveau mot de passe</label>
				<input
					type="text"
					name="NewPasswordValidation"
					id="NewPasswordValidation"
					value={inputNewPasswordValidation}
					onChange={(e) => setInputNewPasswordValidation(e.target.value)}
				/>

				<button type="submit">Enregistrer</button>
			</form>
		</div>
	);
};

export default UpdatePassword;
