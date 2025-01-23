import { Component } from '@angular/core';
import { ProductService } from '../../services/product.service';
import { ConfirmationService, MessageService } from 'primeng/api';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent {
  products: any[] = [];
  selectedProduct: any | null = null; // Producto seleccionado para edición
  editForm: FormGroup; // Formulario de edición
  displayEditModal: boolean = false; // Controla la visibilidad del modal

  constructor(
    private productService: ProductService,
    private messageService: MessageService,
    private fb: FormBuilder,
    private confirmationService: ConfirmationService
  ) {
    this.editForm = this.fb.group({
      nombre: ['', [Validators.required, Validators.minLength(3)]],
      descripcion: ['', [Validators.required]],
      precio: ['', [Validators.required, Validators.min(0.01)]],
      categoria: ['', [Validators.required]],
    });
  }

  ngOnInit(): void {
    this.loadProducts();
  }


  //Carga la lista de los productos

  loadProducts(): void {
    this.productService.getProducts().subscribe({
      next: (data) => {
        this.products = data;
      },
      error: (error) => {
        this.messageService.add({
          severity: 'error',
          summary: 'Error',
          detail: 'Error al cargar la información.',
          life: 3000,
        });
      },
    });
  }

  // Abrir el modal de edición
  openEditModal(product: any): void {
    this.selectedProduct = product;
    this.editForm.patchValue(product);
    this.displayEditModal = true; 
  }

    // Guardar los cambios del producto
    saveChanges(): void {
      if (this.editForm.valid && this.selectedProduct) {
        const updatedProduct = this.editForm.value;
        this.productService.updateProduct(this.selectedProduct.id, updatedProduct).subscribe({
          next: () => {
            this.messageService.add({
              severity: 'success',
              summary: 'Éxito',
              detail: 'Producto actualizado',
              life: 3000,
            });
            this.displayEditModal = false;
            this.selectedProduct = null; 
            this.loadProducts(); 
          },
          error: () => {
            this.messageService.add({
              severity: 'error',
              summary: 'Error',
              detail: 'Error al guardar los cambios',
              life: 3000,
            });
          },
        });
      }
    }

  // Confirmar antes de guardar cambios de edición
  confirmEdit(): void {
    this.confirmationService.confirm({
      message: '¿Estás seguro de que deseas guardar los cambios?',
      header: 'Confirmar Edición',
      icon: 'pi pi-exclamation-triangle',
      accept: () => {
        this.saveChanges();
      },
      reject: () => {
        this.messageService.add({
          severity: 'info',
          summary: 'Cancelado',
          detail: 'Los cambios no fueron guardados.',
          life: 3000,
        });
      },
    });
  }
  




  // Cerrar el modal de edición
  closeEditModal(): void {
    this.displayEditModal = false;
    this.selectedProduct = null;
    this.editForm.reset();
  }


  // Eliminar producto
  deleteProduct(id: number): void {
    this.productService.deleteProduct(id).subscribe({
      next: () => {
        this.messageService.add({
          severity: 'success',
          summary: 'Éxito',
          detail: 'El producto fue eliminado con éxito.',
          life: 3000,
        });
        this.loadProducts();
      },
      error: () => {
        this.messageService.add({
          severity: 'error',
          summary: 'Error',
          detail: 'No se pudo eliminar el producto.',
          life: 3000,
        });
      },
    });
  }
  

  // Confirmación para eliminar producto
  confirmDelete(product: any): void {
    this.confirmationService.confirm({
      message: `¿Estás seguro de que deseas eliminar "${product.nombre}"?`,
      header: 'Confirmación',
      icon: 'pi pi-exclamation-triangle',
      accept: () => {
        this.deleteProduct(product.id);
      },
      reject: () => {
        this.messageService.add({
          severity: 'info',
          summary: 'Cancelado',
          detail: 'Eliminación cancelada.',
          life: 3000,
        });
      },
    });
  }




}
