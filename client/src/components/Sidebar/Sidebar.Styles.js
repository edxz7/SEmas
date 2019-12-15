/* Sidebar */
import styled from 'styled-components';

export const SidebarItemStyle = styled.div`
  .sidebar-item {
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    padding: 300px;
    background-color: #20293b;
  }
  
  .sidebar-item-content {
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;
    display: flex;
    align-items: center;
    width: 100%;
  }
  
  .sidebar-item-icon {
    margin-right: 6px;
  }
  
  .sidebar-item-text {
    width: 100%;
  }
  
  .sidebar-item-expand-arrow {
    font-size: 1.2rem !important;
  }
  
  .sidebar-item-expand-arrow-expanded {
    color: #09bb12;
    font-weight: bold;
  }
`;

export const SidebarStyle = styled.div`
#sidebar{
    padding-top: 125px;
  }
  code {
    font-family: source-code-pro, Menlo, Monaco, Consolas, "Courier New",
      monospace;
  }
  .sidebar {
    max-width: 240px;
    height: 100%;
    border: 1px solid rgba(0, 0, 0, 0.1);
    color: #e40b81;
    background-color: #20293b;
  }
`;
