-- CREATE TABLE User (
--     UserID INT PRIMARY KEY,
--     FirstName VARCHAR(255) NOT NULL,
--     LastName VARCHAR(255) NOT NULL,
--     UserName VARCHAR(50) UNIQUE NOT NULL,
--     Email VARCHAR(50) UNIQUE NOT NULL,
--     Password VARCHAR(255) NOT NULL,
--     UserRole ENUM('Admin', 'Customer', 'Employee') NOT NULL

-- );

-- CREATE TABLE Category (
--     CategoryID INT PRIMARY KEY,
--     CategoryName VARCHAR(255) NOT NULL
-- );

-- CREATE TABLE Product (
--     ProductID INT PRIMARY KEY,
--     Name VARCHAR(255) NOT NULL,
--     Description TEXT,
--     Manufacturer VARCHAR(255),
--     UnitPrice DECIMAL(10, 2) NOT NULL,x
--     QuantityOnHand INT DEFAULT 0 NOT NULL,
--     CategoryID INT,
--     FOREIGN KEY (CategoryID) REFERENCES Category(CategoryID)
-- );

-- CREATE TABLE ProductQuantityHistory (
--     HistoryID INT PRIMARY KEY,
--     ProductID INT,
--     Quantity INT NOT NULL,
--     ChangeDate DATE NOT NULL,
--     ChangeType VARCHAR(10) DEFAULT 'Transaction' NOT NULL, -- 'Restock' or 'Transaction'
--     FOREIGN KEY (ProductID) REFERENCES Product(ProductID)
-- );

-- CREATE TABLE Restock (
--     RestockID INT PRIMARY KEY,
--     ProductID INT,
--     RestockDate DATE NOT NULL,
--     QuantityAdded INT NOT NULL,
--     RestockCost DECIMAL(10, 2) NOT NULL,
--     FOREIGN KEY (ProductID) REFERENCES Product(ProductID)
-- );

-- CREATE TABLE Transaction (
--     TransactionID INT PRIMARY KEY,
--     ProductID INT,
--     TransactionType VARCHAR(10) NOT NULL,
--     Quantity INT NOT NULL,
--     TransactionDate DATE NOT NULL,
--     FOREIGN KEY (ProductID) REFERENCES Product(ProductID)
-- );


-- CREATE TABLE Employee (
--     EmployeeID INT PRIMARY KEY,
--     UserID INT UNIQUE,
--     Position VARCHAR(255),
--     ContactNumber VARCHAR(20),
--     Email VARCHAR(255),
--     FOREIGN KEY (UserID) REFERENCES User(UserID)
-- ); 


-- prod

-- Create item_db table with foreign key reference
CREATE TABLE item_db (
    item_id INT PRIMARY KEY,
    item_name VARCHAR(255) NOT NULL,
    strength INT,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    is_deleted BOOLEAN DEFAULT false,
    category_id INT,
    FOREIGN KEY (category_id) REFERENCES item_category_db(category_id)
);


-- Create item_category_db table
CREATE TABLE item_category_db (
    category_id INT PRIMARY KEY,
    category_name VARCHAR(255) NOT NULL
);

INSERT INTO item_category_db (category_id, category_name)
VALUES
(1, 'oral_tabs'),
(2, 'oral_syrup'),
(3, 'refrigerated_meds'),
(4, 'injections'),
(5, 'dangerous_drugs'),
(6, 'fluids');



--oral tabs
INSERT INTO item_db ( item_name, strength, category_id)
VALUES
('acetylcysteine sachet', '600mg', 1),
('allopurinol tab', '100mg', 1),
