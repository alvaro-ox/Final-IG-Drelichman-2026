/**
 * Utilidad de validación para el formulario de contacto/adopción.
 * Contiene reglas específicas para validar campos críticos.
 */

const ValidacionContacto = {
    /**
     * Valida el formato de un correo electrónico.
     */
    validarEmail: (email) => {
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return regex.test(email);
    },

    /**
     * Valida un código de área (2 a 4 dígitos).
     */
    validarCodigoArea: (codigoArea) => {
        const regex = /^\d{2,4}$/;
        return regex.test(codigoArea);
    },

    /**
     * Valida un número de teléfono (8 dígitos exactos, solo números).
     */
    validarTelefonoLocal: (numero) => {
        const regex = /^\d{8}$/;
        return regex.test(numero);
    },

    /**
     * Valida un Código Postal de Argentina (formato clásico de 4 dígitos).
     */
    validarCodigoPostal: (cp) => {
        const regex = /^\d{4}$/;
        return regex.test(cp.trim());
    }
};

window.ValidacionContacto = ValidacionContacto;
