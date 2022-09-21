import { Component, OnInit, Inject, Output, EventEmitter, Input } from '@angular/core';
import Graph from 'graphology';
import Sigma from 'sigma';
import { DialogAnimations} from '../../components/dialog/dialog.component';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-grafica',
  templateUrl: './grafica.component.html',
  styleUrls: ['./grafica.component.scss']
})
export class GraficaComponent implements OnInit {
  graph: any = new Graph();
  constructor( public dialog: MatDialog, public dialogRef: MatDialogRef<DialogAnimations>) {}
  graficarUsuario(usuario: any, x: number, y: number) {
    this.graph.addNode(usuario.id, {
      x,
      y,
      label: usuario.nombre,
      size: 10,
      color: '#03fa45',
    });
    this.graph.setNodeAttribute(usuario.id, 'data', usuario);
    let yAux = y - 1;

    if(yAux > -2){
    usuario.hijos.forEach((hijo: any, index: number) => {
      let xAux = index % 2 ? x - 1 : x + 1;
      this.graficarUsuario(hijo, xAux, yAux);
      this.graph.addEdge(usuario.id, hijo.id);
    });
    }
  }
  ngOnInit(): void {
    // Retrieve the html document for sigma container
    const container = document.getElementById('sigma-container') as HTMLElement;
    let usuario = {
      id: 1,
      nombre: 'Miguel Hernandez',
      color: '#435376',
      hijos: [
        {
          id: 2,
          nombre: 'Maria Hernandez',
          color: '#435776',
          hijos: [
            {
              id: 4,
              nombre: 'Hernan Dario',
              color: '#435776',
              hijos: [
                {
                  id: 12,
                  nombre: 'Hernan Dario',
                  color: '#435776',
                  hijos: [
                    {
                      id: 22,
                      nombre: 'German Dario',
                      color: '#435776',
                      hijos: [],
                    },
                    {
                      id: 54,
                      nombre: 'Miguel Estrada',
                      color: '#435676',
                      hijos: [],
                    },
                  ],
                },
                {
                  id: 57,
                  nombre: 'Daniel Estrada',
                  color: '#435676',
                  hijos: [],
                },
              ],
            },
            {
              id: 5,
              nombre: 'Daniel Estrada',
              color: '#435676',
              hijos: [],
            },
          ],
        },
        {
          id: 3,
          nombre: 'Daniel Hernandez',
          color: '#435676',
          hijos: [{
            id: 42,
            nombre: 'Daniel Hernandez',
            color: '#435676',
            hijos: [{
              id: 856,
              nombre: 'Daniel Hernandez',
              color: '#435676',
              hijos: [],
            },],
          },],
        },
      ],
    };
        this.graficarUsuario(usuario, 0, 0);

        // Create the sigma
        const renderer: any = new Sigma(this.graph, container);
        console.log(renderer);
        //
        // Drag'n'drop feature
        // ~~~~~~~~~~~~~~~~~~~
        //

        // State for drag'n'drop
        let draggedNode: string | null = null;
        let isDragging = false;

        // On mouse down on a node
        //  - we enable the drag mode
        //  - save in the dragged node in the state
    //  - highlight the node
    //  - disable the camera so its state is not updated
    renderer.on('downNode', (e: any) => {
      isDragging = true;
      draggedNode = e.node;
      this.graph.setNodeAttribute(draggedNode, 'highlighted', true);
    });

    // // On mouse move, if the drag mode is enabled, we change the position of the draggedNode
    renderer.getMouseCaptor().on('mousemovebody', (e: any) => {
      if (!isDragging || !draggedNode) return;

      // Get new position of node
      const pos = renderer.viewportToGraph(e);

      this.graph.setNodeAttribute(draggedNode, 'x', pos.x);
      this.graph.setNodeAttribute(draggedNode, 'y', pos.y);

      // Prevent sigma to move camera:
      e.preventSigmaDefault();
      e.original.preventDefault();
      e.original.stopPropagation();
    });

    // On mouse up, we reset the autoscale and the dragging mode
    renderer.getMouseCaptor().on('mouseup', () => {
      if (draggedNode) {
        this.graph.removeNodeAttribute(draggedNode, 'highlighted');
      }
      isDragging = false;
      draggedNode = null;
    });
      renderer.on(
        'clickNode',
        ({ event }: { event: { x: number; y: number } }) => {
          const closestNodes = this.graph
          .nodes()
          .map((id: any) => {
            const attrs: any = this.graph.getNodeAttributes(id);
            const coordForGraph = renderer.viewportToGraph({
              x: event.x,
              y: event.y,
            });
            const distance =
            Math.pow(coordForGraph.x - attrs.x, 2) +
            Math.pow(coordForGraph.y - attrs.y, 2);
            return { id, distance };
          })
          .sort((a: any, b: any) => a.distance - b.distance)
          .slice(0, 1);
          let usuario = this.graph.getNodeAttribute(closestNodes[0].id, 'data');
          this.dialog.open(DialogAnimations, {
            width: '250px',
            data: usuario
          })
        }
        );
  }
}
