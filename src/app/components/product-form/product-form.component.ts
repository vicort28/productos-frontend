import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ConfirmationService, MessageService } from 'primeng/api';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.scss']
})
export class ProductFormComponent {

  productForm:FormGroup;


  categorias: any[] = [
    { label: 'Electrónica', value: 'Electrónica' },
    { label: 'Hogar', value: 'Hogar' },
    { label: 'Ropa', value: 'Ropa' },
    { label: 'Deportes', value: 'Deportes' },
    { label: 'Otros', value: 'Otros' }
  ];
  


  constructor(
    private fb:FormBuilder,
    private productService: ProductService,
    private messageService: MessageService,
    private confirmationService: ConfirmationService
  ){
    this.productForm = this.fb.group({
      nombre: ['', [Validators.required, Validators.minLength(3)]],
      descripcion: ['', [Validators.required]],
      precio: [null, [Validators.required, Validators.min(0.01)]],
      categoria: ['', [Validators.required]],
    })
  }


  //Funcionalidad para agregar un producto

  addProduct():void{
    if(this.productForm.valid){
      this.productService.createProduct(this.productForm.value).subscribe({
        next:() => {
          this.messageService.add({
            severity:'success',
            summary:'Éxito',
            detail:  'Producto agregado con éxito.'
          });
          this.productForm.reset();
        },
        error:() =>{
          this.messageService.add({
            severity: 'error',
            summary:'Error',
            detail: 'Error al agregar el producto'
          })
        }
      })
    }
  }


  // Modal de confirmación
  confirmAddProduct(): void {
    this.confirmationService.confirm({
      message: '¿Estás seguro de que deseas agregar este producto?',
      header: 'Confirmar Adición',
      icon: 'pi pi-exclamation-triangle',
      accept: () => {
        // Llamar a addProduct solo si se confirma
        this.addProduct();
      },
      reject: () => {
        this.messageService.add({
          severity: 'info',
          summary: 'Cancelado',
          detail: 'La acción fue cancelada.',
          life: 3000,
        });
      },
    });
  }




}
