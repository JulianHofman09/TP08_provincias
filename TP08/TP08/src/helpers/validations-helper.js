class ValidationHelper {

    static validateProvince(province) {

        if (!province.name || province.name.trim().length < 3) {
            return "El nombre debe tener al menos 3 letras";
        }

        if (!province.full_name || province.full_name.trim().length < 3) {
            return "El full_name debe tener al menos 3 letras";
        }

        return "";
    }
}

export default ValidationHelper;