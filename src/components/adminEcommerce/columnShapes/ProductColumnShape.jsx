import { Box, Rating, useTheme } from "@mui/material";
import EditIconButton from "components/EditIconButton";
import FlexBox from "components/FlexBox";
import { H6, Small } from "components/Typography";
import UkoAvatar from "components/UkoAvatar";
import { useState } from "react";
import CreateProductModal from "../CreateProductModal";
const ProductColumnShape = [
    {
        Header: "Details",
        accessor: "details",
        minWidth: 250,
        Cell: ({ row }) => {
            const { imageURL, title, company } = row.original;
            return (
                <FlexBox alignItems="center">
                    <UkoAvatar
                        src={imageURL}
                        alt={title}
                        sx={{
                            width: 60,
                            borderRadius: "10%",
                        }}
                    />
                    <Box ml={2}>
                        <H6 color="text.primary">{title}</H6>
                        <Small>{company}</Small>
                    </Box>
                </FlexBox>
            );
        },
    },
    {
        Header: "Type",
        accessor: "type",
        Cell: ({ value }) => {
            const theme = useTheme();
            return (
                <Small
                    sx={{
                        backgroundColor:
                            theme.palette.mode === "light"
                                ? "secondary.light"
                                : "divider",
                        borderRadius: 10,
                        padding: ".2rem 1rem",
                    }}
                >
                    {value}
                </Small>
            );
        },
    },
    {
        Header: "Muscles",
        accessor: "muscles",
        Cell: ({ value }) => {
            //value.forEach((item) => console.log(item));
            return <div>{value.join(", ")}</div>;
        },
    },
    {
        Header: "Equipment",
        accessor: "equipment",
        Cell: ({ value }) => {
            //value.forEach((item) => console.log(item));
            return <div>{value.join(", ")}</div>;
        },
    },
    {
        Header: "Motion",
        accessor: "motion",
    },
    {
        Header: "Difficulty",
        accessor: "difficulty",
        Cell: ({ value }) => (
            <Box
                sx={{
                    display: "flex",
                    alignItems: "center",
                }}
            >
                <Rating name="read-only" size="small" value={5} readOnly />
                <Box ml={0.5}>({value})</Box>
            </Box>
        ),
    },
    {
        Header: "Action",
        accessor: "action",
        Cell: ({ row }) => {
            const [openModal, setOpenModal] = useState(false);
            return (
                <>
                    <EditIconButton onClick={() => setOpenModal(true)} />

                    <CreateProductModal
                        editProduct
                        open={openModal}
                        data={row.original}
                        onClose={() => setOpenModal(false)}
                    />
                </>
            );
        },
    },
];
export default ProductColumnShape;
