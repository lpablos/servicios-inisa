import { Box, SimpleGrid, Button, useDisclosure, Input, FormControl, FormLabel } from "@chakra-ui/react";
import DevelopmentTable from "@horizon/views/Inisa/dataTables/components/DevelopmentTable";
import CheckTable from "@horizon/views/Inisa/dataTables/components/CheckTable";
import ColumnsTable from "@horizon/views/Inisa/dataTables/components/ColumnsTable";
import ComplexTable from "@horizon/views/Inisa/dataTables/components/ComplexTable";
import CustomModal from "@horizon/views/Inisa/modalForm/";

import {
    columnsDataDevelopment,
    columnsDataCheck,
    columnsDataColumns,
    columnsDataComplex,
} from "@horizon/views/Inisa/dataTables/variables/columnsData";
import tableDataDevelopment from "@horizon/views/Inisa/dataTables/variables/tableDataDevelopment.json";
import tableDataCheck from "@horizon/views/Inisa/dataTables/variables/tableDataCheck.json";
import tableDataColumns from "@horizon/views/Inisa/dataTables/variables/tableDataColumns.json";
import tableDataComplex from "@horizon/views/Inisa/dataTables/variables/tableDataComplex.json";
import React, { useState } from "react";

export default function Settings() {
    // Manejo del estado del modal
    const { isOpen, onOpen, onClose } = useDisclosure();

    // Estado para el formulario
    const [formData, setFormData] = useState({
        name: "",
        description: "",
        price: "",
    });

    // Manejar cambios en los campos del formulario
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    // Manejar el envío del formulario
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Datos del formulario:", formData);
        onClose(); // Cierra el modal después de enviar
        // Aquí puedes agregar la lógica para enviar los datos al servidor
    };

    return (
        <Box pt={{ base: "130px", md: "80px", xl: "80px" }}>
            <SimpleGrid
                mb="20px"
                columns={{ sm: 1, md: 1, lg: 1, xl: 1 }}
                spacing={{ base: "20px", xl: "20px" }}
            >
                {/* Botón para abrir el modal */}
                <Button colorScheme="teal" onClick={onOpen}>
                    Nuevo Registro
                </Button>

                {/* Tabla de Columnas */}
                <ColumnsTable
                    columnsData={columnsDataColumns}
                    tableData={tableDataColumns}
                />

                {/* Modal Reutilizable con Formulario */}
                <CustomModal
                    isOpen={isOpen}
                    onClose={onClose}
                    title="Alta Catálogo"
                    bodyContent={
                        <form onSubmit={handleSubmit}>
                            <FormControl mb="4">
                                <FormLabel>Nombre</FormLabel>
                                <Input
                                    type="text"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    placeholder="Escribe el nombre"
                                    required
                                />
                            </FormControl>
                            <FormControl mb="4">
                                <FormLabel>Descripción</FormLabel>
                                <Input
                                    type="text"
                                    name="description"
                                    value={formData.description}
                                    onChange={handleChange}
                                    placeholder="Escribe la descripción"
                                    required
                                />
                            </FormControl>
                            <FormControl mb="4">
                                <FormLabel>Precio</FormLabel>
                                <Input
                                    type="number"
                                    name="price"
                                    value={formData.price}
                                    onChange={handleChange}
                                    placeholder="Escribe el precio"
                                    required
                                />
                            </FormControl>
                        </form>
                    }
                    footerButtons={
                        <>
                            <Button colorScheme="blue" mr={3} type="submit" onClick={handleSubmit}>
                                Enviar
                            </Button>
                            <Button variant="ghost" onClick={onClose}>
                                Cerrar
                            </Button>
                        </>
                    }
                />
            </SimpleGrid>
        </Box>
    );
}
