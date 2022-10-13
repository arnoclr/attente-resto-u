export const onRequestGet = async ({ request }) => {
    const urlParams = request.url.split('?')[1];

    return await fetch("https://perso-etudiant.u-pem.fr/~arno.cellarier/taru/insert.php?" + urlParams);
};